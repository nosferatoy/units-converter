'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const RATIO = 1;

const power = {
  metric: {
    baseUnit: 'W',
    transform: (val) => { return val * RATIO },
    W: {
      name: {
        singular: 'Watt',
        plural: 'Watts'
      },
      to_anchor: 1
    },
    mW: {
      name: {
        singular: 'Milliwatt',
        plural: 'Milliwatts'
      },
      to_anchor: 0.001
    },
    kW: {
      name: {
        singular: 'Kilowatt',
        plural: 'Kilowatts'
      },
      to_anchor: 1000
    },
    MW: {
      name: {
        singular: 'Megawatt',
        plural: 'Megawatts'
      },
      to_anchor: 1000000
    },
    GW: {
      name: {
        singular: 'Gigawatt',
        plural: 'Gigawatts'
      },
      to_anchor: 1000000000
    }
  }
};
var power$1 = utils(power);

module.exports = power$1;
