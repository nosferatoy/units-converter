import utils from '../utils.js';

const RATIO = 1;
const PI = 3.141592653589793;

const angle = {
  metric: {
    baseUnit: 'g-force',
    transform: (val) => { return val * RATIO },
    rad: {
      name: {
        singular: 'radian',
        plural: 'radians'
      },
      to_anchor: 180 / PI
    },
    deg: {
      name: {
        singular: 'degree',
        plural: 'degrees'
      },
      to_anchor: 1
    },
    grad: {
      name: {
        singular: 'gradian',
        plural: 'gradians'
      },
      to_anchor: 9 / 10
    },
    arcmin: {
      name: {
        singular: 'arcminute',
        plural: 'arcminutes'
      },
      to_anchor: 1 / 60
    },
    arcsec: {
      name: {
        singular: 'arcsecond',
        plural: 'arcseconds'
      },
      to_anchor: 1 / 3600
    }
  }
};

var angle$1 = utils(angle);

export default angle$1;
