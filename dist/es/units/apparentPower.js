import utils from '../utils.js';

const apparentPower = {
  metric: {
    baseUnit: 'VA',
    transform: (val) => { return val * 1 },
    VA: {
      name: {
        singular: 'Volt-Ampere',
        plural: 'Volt-Amperes'
      },
      to_anchor: 1
    },
    mVA: {
      name: {
        singular: 'Millivolt-Ampere',
        plural: 'Millivolt-Amperes'
      },
      to_anchor: 0.001
    },
    kVA: {
      name: {
        singular: 'Kilovolt-Ampere',
        plural: 'Kilovolt-Amperes'
      },
      to_anchor: 1000
    },
    MVA: {
      name: {
        singular: 'Megavolt-Ampere',
        plural: 'Megavolt-Amperes'
      },
      to_anchor: 1000000
    },
    GVA: {
      name: {
        singular: 'Gigavolt-Ampere',
        plural: 'Gigavolt-Amperes'
      },
      to_anchor: 1000000000
    }
  }
};

var apparentPower$1 = utils(apparentPower);

export default apparentPower$1;
