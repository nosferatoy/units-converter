'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const RATIO = 0.000001;

const partsPer = {
  metric: {
    baseUnit: 'ppm',
    transform: (val) => { return val * RATIO },
    ppm: {
      name: {
        singular: 'Part-per Million',
        plural: 'Parts-per Million'
      },
      to_anchor: 1
    },
    ppb: {
      name: {
        singular: 'Part-per Billion',
        plural: 'Parts-per Billion'
      },
      to_anchor: 0.001
    },
    ppt: {
      name: {
        singular: 'Part-per Trillion',
        plural: 'Parts-per Trillion'
      },
      to_anchor: 0.000001
    },
    ppq: {
      name: {
        singular: 'Part-per Quadrillion',
        plural: 'Parts-per Quadrillion'
      },
      to_anchor: 0.000000001
    }
  }
};

var partsPer$1 = utils(partsPer);

module.exports = partsPer$1;
