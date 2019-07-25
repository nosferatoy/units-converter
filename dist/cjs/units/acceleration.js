'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const acceleration = {
  metric: {
    baseUnit: 'g-force',
    transform: (val) => { return val * 1 },
    'g-force': {
      name: {
        singular: 'g-force',
        plural: 'g-forces'
      },
      to_anchor: 9.80665
    },
    'm/s2': {
      name: {
        singular: 'Metre per second squared',
        plural: 'Metres per second squared'
      },
      to_anchor: 1
    }
  }
};

var acceleration$1 = utils(acceleration);

module.exports = acceleration$1;
