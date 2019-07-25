import utils from '../utils.js';

const RATIO = 1;

const voltage = {
  metric: {
    baseUnit: 'V',
    transform: (val) => { return val * RATIO },
    V: {
      name: {
        singular: 'Volt',
        plural: 'Volts'
      },
      to_anchor: 1
    },
    mV: {
      name: {
        singular: 'Millivolt',
        plural: 'Millivolts'
      },
      to_anchor: 0.001
    },
    kV: {
      name: {
        singular: 'Kilovolt',
        plural: 'Kilovolts'
      },
      to_anchor: 1000
    }
  }
};

var voltage$1 = utils(voltage);

export default voltage$1;
