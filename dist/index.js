export { default as digital } from './units/digital.js';
export { default as volume } from './units/volume.js';

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
    return Object.assign({ value:this.val }, this.describe(this.destination.abbr));
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

  return Object.assign({ value:  result / this.destination.unit.to_anchor }, this.describe(this.destination.abbr));
};

Converter.prototype.toBest = function (options) {
  if (!this.origin)
    throw new Error('.toBest must be called after .from');

  options = Object.assign({
    exclude: [],
    cutOffNumber: 1,
  }, options);

  return this.list()
    .filter(item => !options.exclude.includes(item.abbr) && this.describe(item.abbr).system === this.origin.system)
    .reduce((acc, item) => {
      const result = this.to(item.abbr);
      if (!acc || (result.value >= options.cutOffNumber && result.value < acc.val)) {
        return acc = result;
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
    abbr: unit.abbr,
    system: unit.system,
    singular: unit.unit.name.singular,
    plural: unit.unit.name.plural
  }
};

Converter.prototype.possibilities = function () {
  return Object.keys(this.definitions)
    .map(systemName => {
      return Object.keys(this.definitions[systemName]).splice(2)
    }).flat()
};

function converter(definitions) {
  return (val) => {
    return new Converter(val, definitions)
  }
}

const acceleration = {
  metric : {
    baseUnit: 'g-force',
    transform: (val) => { return val * 1 },
    'g-force': {
      name: {
        singular: 'g-force'
        , plural: 'g-forces'
      }
      , to_anchor: 9.80665
    }
    , 'm/s2': {
      name: {
        singular: 'Metre per second squared'
        , plural: 'Metres per second squared'
      }
      , to_anchor: 1
    }
  }
};

var acceleration$1 = converter(acceleration);

const RATIO = 453.592;

const mass = {
    metric: {
        baseUnit: 'g',
        transform: (val) => { return val * 1 / RATIO },
        mcg: {
            name: {
                singular: 'Microgram'
                , plural: 'Micrograms'
            }
            , to_anchor: 1 / 1000000
        }
        , mg: {
            name: {
                singular: 'Milligram'
                , plural: 'Milligrams'
            }
            , to_anchor: 1 / 1000
        }
        , g: {
            name: {
                singular: 'Gram'
                , plural: 'Grams'
            }
            , to_anchor: 1
        }
        , kg: {
            name: {
                singular: 'Kilogram'
                , plural: 'Kilograms'
            }
            , to_anchor: 1000
        }
        , mt: {
            name: {
                singular: 'Metric Tonne'
                , plural: 'Metric Tonnes'
            }
            , to_anchor: 1000000
        }
    },
    imperial: {
        baseUnit: 'lb',
        transform: (val) => { return val * RATIO },
        oz: {
            name: {
                singular: 'Ounce'
                , plural: 'Ounces'
            }
            , to_anchor: 1 / 16
        }
        , lb: {
            name: {
                singular: 'Pound'
                , plural: 'Pounds'
            }
            , to_anchor: 1
        }, t: {
            name: {
                singular: 'Ton',
                plural: 'Tons',
            },
            to_anchor: 2000,
        },
    }
};

var mass$1 = converter(mass);

const RATIO$1 = 3.28084;

const length = {
    metric: {
        baseUnit: 'm',
        transform: (val) => { return val * RATIO$1 },
        mm: {
            name: {
                singular: 'Millimeter',
                plural: 'Millimeters'
            },
            to_anchor: 1 / 1000
        },
        cm: {
            name: {
                singular: 'Centimeter',
                plural: 'Centimeters'
            },
            to_anchor: 1 / 100
        },
        m: {
            name: {
                singular: 'Meter',
                plural: 'Meters'
            },
            to_anchor: 1
        },
        km: {
            name: {
                singular: 'Kilometer',
                plural: 'Kilometers'
            },
            to_anchor: 1000
        }
    },
    imperial: {
        baseUnit: 'ft',
        transform: (val) => { return val * 1 / RATIO$1 },
        'in': {
            name: {
                singular: 'Inch',
                plural: 'Inches'
            },
            to_anchor: 1 / 12
        },
        yd: {
            name: {
                singular: 'Yard',
                plural: 'Yards'
            },
            to_anchor: 3
        },
        'ft-us': {
            name: {
                singular: 'US Survey Foot',
                plural: 'US Survey Feet'
            },
            to_anchor: 1.000002
        },
        ft: {
            name: {
                singular: 'Foot',
                plural: 'Feet'
            },
            to_anchor: 1
        },
        fathom: {
            name: {
                singular: 'Fathom',
                plural: 'Fathoms',
            },
            to_anchor: 6
        },
        mi: {
            name: {
                singular: 'Mile',
                plural: 'Miles'
            },
            to_anchor: 5280
        },
        nMi: {
            name: {
                singular: 'Nautical Mile',
                plural: 'Nautical Miles'
            },
            to_anchor: 6076.12
        }
    }
};

var length$1 = converter(length);

export { acceleration$1 as acceleration, length$1 as length, mass$1 as mass };
