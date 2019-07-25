import utils from '../utils.js';

const RATIO = 453.592;

const mass = {
  metric: {
    baseUnit: 'g',
    transform: (val) => { return val * 1 / RATIO },
    mcg: {
      name: {
        singular: 'Microgram',
        plural: 'Micrograms'
      },
      to_anchor: 1 / 1000000
    },
    mg: {
      name: {
        singular: 'Milligram',
        plural: 'Milligrams'
      },
      to_anchor: 1 / 1000
    },
    g: {
      name: {
        singular: 'Gram',
        plural: 'Grams'
      },
      to_anchor: 1
    },
    kg: {
      name: {
        singular: 'Kilogram',
        plural: 'Kilograms'
      },
      to_anchor: 1000
    },
    mt: {
      name: {
        singular: 'Metric Tonne',
        plural: 'Metric Tonnes'
      },
      to_anchor: 1000000
    }
  },
  imperial: {
    baseUnit: 'lb',
    transform: (val) => { return val * RATIO },
    oz: {
      name: {
        singular: 'Ounce',
        plural: 'Ounces'
      },
      to_anchor: 1 / 16
    },
    lb: {
      name: {
        singular: 'Pound',
        plural: 'Pounds'
      },
      to_anchor: 1
    },
    t: {
      name: {
        singular: 'Ton',
        plural: 'Tons'
      },
      to_anchor: 2000
    }
  }
};

var mass$1 = utils(mass);

export default mass$1;
