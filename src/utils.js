'use strict'

const Converter = function (numerator, definitions) {
  this.definitions = definitions

  this.val = numerator

  // TODO check if the deonominator is needed
  // if (denominator)
  //     this.val = numerator / denominator;
  // else
  //     this.val = numerator;
}

Converter.prototype.from = function (from) {
  if (this.destination) { throw new Error('.from must be called before .to') }

  this.origin = this.getUnit(from)

  if (!this.origin) {
    this.throwUnsupportedUnitError(from)
  }

  return this
}

Converter.prototype.to = function (to) {
  if (!this.origin) { throw new Error('.to must be called after .from') }

  this.destination = this.getUnit(to)

  // console.log(" origin : ", this.origin);
  // console.log(" destination : ", this.destination)

  let result

  if (!this.destination) {
    this.throwUnsupportedUnitError(to)
  }

  if (this.origin.abbr === this.destination.abbr) {
    return this.val
  }

  result = this.val * this.origin.unit.to_anchor

  if (this.origin.unit.anchor_shift) {
    result -= this.origin.unit.anchor_shift
  }

  if (this.origin.system !== this.destination.system) {
    result = this.definitions[this.origin.system].transform(result)
  }

  if (this.destination.unit.anchor_shift !== undefined) {
    result += this.destination.unit.anchor_shift
  }

  return result / this.destination.unit.to_anchor
}

Converter.prototype.toBest = function (options) {

}

Converter.prototype.getUnit = function (abbr) {
  let found

  Object.keys(this.definitions).forEach(system => {
    this.definitions[system].units
      .filter(unit => { return unit.alias === abbr })
      .forEach(unit => {
        found = {
          abbr: abbr,
          system: system,
          unit: unit
        }
      })
  })

  return found !== undefined ? found : false
}

Converter.prototype.list = function (measure) {

}

Converter.prototype.throwUnsupportedUnitError = function (what) {
  throw new Error('Unsupported unit ' + what)
}

Converter.prototype.possibilities = function (measure) {

}

Converter.prototype.measures = function () {

}

export default function converter (definitions) {
  return (val) => {
    return new Converter(val, definitions)
  }
}
