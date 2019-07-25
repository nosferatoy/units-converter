import utils from '../utils.js';

const RATIO = 3.28084;

const length = {
  metric: {
    baseUnit: 'm',
    transform: (val) => { return val * RATIO },
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
    transform: (val) => { return val * 1 / RATIO },
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
        plural: 'Fathoms'
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

var length$1 = utils(length);

export default length$1;
