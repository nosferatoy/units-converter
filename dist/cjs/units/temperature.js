'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const temperature = {
  metric: {
    baseUnit: 'C',
    transform: (val) => { return val / (5 / 9) + 32 },
    C: {
      name: {
        singular: 'degree Celsius',
        plural: 'degrees Celsius'
      },
      to_anchor: 1,
      anchor_shift: 0
    },
    K: {
      name: {
        singular: 'degree Kelvin',
        plural: 'degrees Kelvin'
      },
      to_anchor: 1,
      anchor_shift: 273.15
    }
  },
  imperial: {
    baseUnit: 'F',
    transform: (val) => { return (val - 32) * (5 / 9) },
    F: {
      name: {
        singular: 'degree Fahrenheit',
        plural: 'degrees Fahrenheit'
      },
      to_anchor: 1
    },
    R: {
      name: {
        singular: 'degree Rankine',
        plural: 'degrees Rankine'
      },
      to_anchor: 1,
      anchor_shift: 459.67
    }
  }
};

var temperature$1 = utils(temperature);

module.exports = temperature$1;
