'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const RATIO = 1;

const current = {
  metric: {
    baseUnit: 'a',
    transform: (val) => { return RATIO * val },
    A: {
      name: {
        singular: 'Ampere',
        plural: 'Amperes'
      },
      to_anchor: 1
    },
    mA: {
      name: {
        singular: 'Milliampere',
        plural: 'Milliamperes'
      },
      to_anchor: 0.001
    },
    kA: {
      name: {
        singular: 'Kiloampere',
        plural: 'Kiloamperes'
      },
      to_anchor: 1000
    }
  }
};

var current$1 = utils(current);

module.exports = current$1;
