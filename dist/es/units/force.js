import utils from '../utils.js';

const RATIO = 4.44822;

const force = {
  metric: {
    baseUnit: 'N',
    transform: (val) => { return val * 1 / RATIO },
    N: {
      name: {
        singular: 'Newton',
        plural: 'Newtons'
      },
      to_anchor: 1
    },
    kN: {
      name: {
        singular: 'Kilonewton',
        plural: 'Kilonewtons'
      },
      to_anchor: 1000
    }
  },
  imperial: {
    baseUnit: 'lbf',
    transform: (val) => { return RATIO * val },
    lbf: {
      name: {
        singular: 'Pound-force',
        plural: 'Pound-forces'
      },
      to_anchor: 1
    }
  }
};

var force$1 = utils(force);

export default force$1;
