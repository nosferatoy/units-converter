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
    return this.val
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

  return result / this.destination.unit.to_anchor
};

Converter.prototype.toBest = function (options) {

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

Converter.prototype.list = function (measure) {

};

Converter.prototype.throwUnsupportedUnitError = function (what) {
  throw new Error('Unsupported unit ' + what)
};

Converter.prototype.possibilities = function (measure) {

};

Converter.prototype.measures = function () {

};

function converter (definitions) {
  return (val) => {
    return new Converter(val, definitions)
  }
}

export default converter;
