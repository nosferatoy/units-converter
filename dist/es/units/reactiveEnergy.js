import utils from '../utils.js';

const RATIO = 1;

const reactiveEnergy = {
  metric: {
    baseUnit: 'VARh',
    transform: (val) => { return val * RATIO },
    VARh: {
      name: {
        singular: 'Volt-Ampere Reactive Hour',
        plural: 'Volt-Amperes Reactive Hour'
      },
      to_anchor: 1
    },
    mVARh: {
      name: {
        singular: 'Millivolt-Ampere Reactive Hour',
        plural: 'Millivolt-Amperes Reactive Hour'
      },
      to_anchor: 0.001
    },
    kVARh: {
      name: {
        singular: 'Kilovolt-Ampere Reactive Hour',
        plural: 'Kilovolt-Amperes Reactive Hour'
      },
      to_anchor: 1000
    },
    MVARh: {
      name: {
        singular: 'Megavolt-Ampere Reactive Hour',
        plural: 'Megavolt-Amperes Reactive Hour'
      },
      to_anchor: 1000000
    },
    GVARh: {
      name: {
        singular: 'Gigavolt-Ampere Reactive Hour',
        plural: 'Gigavolt-Amperes Reactive Hour'
      },
      to_anchor: 1000000000
    }
  }
};

var reactiveEnergy$1 = utils(reactiveEnergy);

export default reactiveEnergy$1;
