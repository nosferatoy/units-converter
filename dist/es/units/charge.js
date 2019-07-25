import utils from '../utils.js';

const RATIO = 1;

const charge = {
  metric: {
    baseUnit: 'c',
    transform: (val) => { return RATIO * val },
    c: {
      name: {
        singular: 'Coulomb',
        plural: 'Coulombs'
      },
      to_anchor: 1
    },
    mC: {
      name: {
        singular: 'Millicoulomb',
        plural: 'Millicoulombs'
      },
      to_anchor: 1 / 1000
    },
    μC: {
      name: {
        singular: 'Microcoulomb',
        plural: 'Microcoulombs'
      },
      to_anchor: 1 / 1000000
    },
    nC: {
      name: {
        singular: 'Nanocoulomb',
        plural: 'Nanocoulombs'
      },
      to_anchor: 1e-9
    },
    pC: {
      name: {
        singular: 'Picocoulomb',
        plural: 'Picocoulombs'
      },
      to_anchor: 1e-12
    }
  }
};

var charge$1 = utils(charge);

export default charge$1;
