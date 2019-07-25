'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const RATIO = 1;
const each = {
  metric: {
    baseUnit: 'ea',
    transform: (val) => { return RATIO * val },
    ea: {
      name: {
        singular: 'Each',
        plural: 'Each'
      },
      to_anchor: 1
    },
    dz: {
      name: {
        singular: 'Dozen',
        plural: 'Dozens'
      },
      to_anchor: 12
    }
  }
};

var each$1 = utils(each);

module.exports = each$1;
