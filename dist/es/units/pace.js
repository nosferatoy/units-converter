import utils from '../utils.js';

const RATIO = 0.3048;

const pace = {
  metric: {
    baseUnit: 's/m',
    transform: (val) => { return val * RATIO },
    'min/km': {
      name: {
        singular: 'Minute per kilometre',
        plural: 'Minutes per kilometre'
      },
      to_anchor: 0.06
    },
    's/m': {
      name: {
        singular: 'Second per metre',
        plural: 'Seconds per metre'
      },
      to_anchor: 1
    }
  },
  imperial: {
    baseUnit: 's/ft',
    transform: (val) => { return val * 1 / RATIO },
    'min/mi': {
      name: {
        singular: 'Minute per mile',
        plural: 'Minutes per mile'
      },
      to_anchor: 0.0113636
    },
    's/ft': {
      name: {
        singular: 'Second per foot',
        plural: 'Seconds per foot'
      },
      to_anchor: 1
    }
  }
};

var pace$1 = utils(pace);

export default pace$1;
