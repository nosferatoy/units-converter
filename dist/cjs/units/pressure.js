'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const RATIO = 0.00014503768078;

const pressure = {
  metric: {
    baseUnit: 'kPa',
    transform: (val) => { return val * RATIO },
    Pa: {
      name: {
        singular: 'pascal',
        plural: 'pascals'
      },
      to_anchor: 1 / 1000
    },
    kPa: {
      name: {
        singular: 'kilopascal',
        plural: 'kilopascals'
      },
      to_anchor: 1
    },
    MPa: {
      name: {
        singular: 'megapascal',
        plural: 'megapascals'
      },
      to_anchor: 1000
    },
    hPa: {
      name: {
        singular: 'hectopascal',
        plural: 'hectopascals'
      },
      to_anchor: 1 / 10
    },
    bar: {
      name: {
        singular: 'bar',
        plural: 'bar'
      },
      to_anchor: 100
    },
    torr: {
      name: {
        singular: 'torr',
        plural: 'torr'
      },
      to_anchor: 101325 / 760000
    }
  },

  imperial: {
    baseUnit: 'psi',
    transform: (val) => { return val * 1 / RATIO },
    psi: {
      name: {
        singular: 'pound per square inch',
        plural: 'pounds per square inch'
      },
      to_anchor: 1 / 1000
    },
    ksi: {
      name: {
        singular: 'kilopound per square inch',
        plural: 'kilopound per square inch'
      },
      to_anchor: 1
    }
  }
};

var pressure$1 = utils(pressure);

module.exports = pressure$1;
