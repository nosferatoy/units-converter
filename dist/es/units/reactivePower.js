import utils from '../utils.js';

const RATIO = 1;

const reactivePower = {
  metric: {
    baseUnit: 'VAR',
    transform: (val) => { return val * RATIO },
    VAR: {
      name: {
        singular: 'Volt-Ampere Reactive',
        plural: 'Volt-Amperes Reactive'
      },
      to_anchor: 1
    },
    mVAR: {
      name: {
        singular: 'Millivolt-Ampere Reactive',
        plural: 'Millivolt-Amperes Reactive'
      },
      to_anchor: 0.001
    },
    kVAR: {
      name: {
        singular: 'Kilovolt-Ampere Reactive',
        plural: 'Kilovolt-Amperes Reactive'
      },
      to_anchor: 1000
    },
    MVAR: {
      name: {
        singular: 'Megavolt-Ampere Reactive',
        plural: 'Megavolt-Amperes Reactive'
      },
      to_anchor: 1000000
    },
    GVAR: {
      name: {
        singular: 'Gigavolt-Ampere Reactive',
        plural: 'Gigavolt-Amperes Reactive'
      },
      to_anchor: 1000000000
    }
  }
};

var reactivePower$1 = utils(reactivePower);

export default reactivePower$1;
