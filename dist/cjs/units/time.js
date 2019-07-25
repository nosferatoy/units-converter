'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var utils = _interopDefault(require('../utils.js'));

const RATIO = 1;
const daysInYear = 365.25;

const time = {
  metric: {
    baseUnit: 's',
    transform: (val) => { return val * RATIO },
    ns: {
      name: {
        singular: 'Nanosecond',
        plural: 'Nanoseconds'
      },
      to_anchor: 1 / 1000000000
    },
    mu: {
      name: {
        singular: 'Microsecond',
        plural: 'Microseconds'
      },
      to_anchor: 1 / 1000000
    },
    ms: {
      name: {
        singular: 'Millisecond',
        plural: 'Milliseconds'
      },
      to_anchor: 1 / 1000
    },
    s: {
      name: {
        singular: 'Second',
        plural: 'Seconds'
      },
      to_anchor: 1
    },
    min: {
      name: {
        singular: 'Minute',
        plural: 'Minutes'
      },
      to_anchor: 60
    },
    h: {
      name: {
        singular: 'Hour',
        plural: 'Hours'
      },
      to_anchor: 60 * 60
    },
    d: {
      name: {
        singular: 'Day',
        plural: 'Days'
      },
      to_anchor: 60 * 60 * 24
    },
    week: {
      name: {
        singular: 'Week',
        plural: 'Weeks'
      },
      to_anchor: 60 * 60 * 24 * 7
    },
    month: {
      name: {
        singular: 'Month',
        plural: 'Months'
      },
      to_anchor: 60 * 60 * 24 * daysInYear / 12
    },
    year: {
      name: {
        singular: 'Year',
        plural: 'Years'
      },
      to_anchor: 60 * 60 * 24 * daysInYear
    }
  }
};

var time$1 = utils(time);

module.exports = time$1;
