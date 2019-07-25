import utils from '../utils.js';

const acceleration = {
  metric: {
    baseUnit: 'g-force',
    transform: (val) => { return val * 1 },
    'g-force': {
      name: {
        singular: 'g-force',
        plural: 'g-forces'
      },
      to_anchor: 9.80665
    },
    'm/s2': {
      name: {
        singular: 'Metre per second squared',
        plural: 'Metres per second squared'
      },
      to_anchor: 1
    }
  }
};

var acceleration$1 = utils(acceleration);

export default acceleration$1;
