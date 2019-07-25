'use strict';

const Converter = function (numerator, definitions) {
  this.definitions = definitions;
  this.val = numerator;
};

Converter.prototype.from = function (from) {
  if (this.destination) { throw new Error('.from must be called before .to') }

  this.origin = this.getUnit(from);

  if (!this.origin) {
    this.throwUnsupportedUnitError(from);
  }

  return this
};

Converter.prototype.to = function (to) {
  if (!this.origin) { throw new Error('.to must be called after .from') }

  this.destination = this.getUnit(to);

  let result;

  if (!this.destination) {
    this.throwUnsupportedUnitError(to);
  }

  if (this.origin.abbr === this.destination.abbr) {
    return Object.assign({ value: this.val }, this.describe(this.destination.abbr))
  }

  result = this.val * this.origin.unit.to_anchor;

  if (this.origin.unit.anchor_shift) {
    result -= this.origin.unit.anchor_shift;
  }

  if (this.origin.system !== this.destination.system) {
    result = this.definitions[this.origin.system].transform(result);
  }

  if (this.destination.unit.anchor_shift !== undefined) {
    result += this.destination.unit.anchor_shift;
  }

  return Object.assign({ value: result / this.destination.unit.to_anchor }, this.describe(this.destination.abbr))
};

Converter.prototype.toBest = function (options) {
  if (!this.origin) { throw new Error('.toBest must be called after .from') }

  options = Object.assign({
    exclude: [],
    cutOffNumber: 1
  }, options);

  return this.list()
    .filter(item => !options.exclude.includes(item.unit) && this.describe(item.unit).system === this.origin.system)
    .reduce((acc, item) => {
      const result = this.to(item.unit);
      if (!acc || (result.value >= options.cutOffNumber && result.value < acc.value)) {
        return result
      } else {
        return acc
      }
    }, undefined)
};

Converter.prototype.getUnit = function (abbr) {
  const systemNames = Object.keys(this.definitions);
  const found = systemNames.map(systemName => {
    if (this.definitions[systemName][abbr]) {
      return {
        abbr: abbr,
        system: systemName,
        unit: this.definitions[systemName][abbr]
      }
    }
  }).filter(item => item !== undefined);

  return Array.isArray(found) ? found[0] : undefined
};

Converter.prototype.list = function () {
  return this.possibilities().map(abbr => this.describe(abbr))
};

Converter.prototype.throwUnsupportedUnitError = function (what) {
  throw new Error('Unsupported unit ' + what)
};

Converter.prototype.describe = function (abbr) {
  if (!abbr) { throw new Error('You must select a unit') }

  const unit = this.getUnit(abbr);

  return {
    unit: unit.abbr,
    system: unit.system,
    singular: unit.unit.name.singular,
    plural: unit.unit.name.plural
  }
};

Converter.prototype.possibilities = function () {
  return Array.prototype.concat(...Object.keys(this.definitions)
    .map(systemName => {
      return Object.keys(this.definitions[systemName]).splice(2)
    }))
};

function converter (definitions) {
  return (val) => {
    return new Converter(val, definitions)
  }
}

module.exports = converter;
