import utils from '../utils.js';

const RATIO = 10.76391;

const illuminance = {
  metric: {
    baseUnit: 'lx',
    transform: (val) => { return val * 1 / RATIO },
    'lx': {
      name: {
        singular: 'Lux',
        plural: 'Lux'
      },
      to_anchor: 1
    }
  },
  imperial: {
    baseUnit: 'ft-cd',
    transform: (val) => { return RATIO * val },
    'ft-cd': {
      name: {
        singular: 'Foot-candle',
        plural: 'Foot-candles'
      },
      to_anchor: 1
    }
  }
};

var illuminance$1 = utils(illuminance);

export default illuminance$1;
