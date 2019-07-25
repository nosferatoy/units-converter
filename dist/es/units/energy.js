import utils from '../utils.js';

const RATIO = 1;

const energy = {
  metric: {
    baseUnit: 'J',
    transform: (val) => { return RATIO * val },
    Wh: {
      name: {
        singular: 'Watt-hour',
        plural: 'Watt-hours'
      },
      to_anchor: 3600
    },
    mWh: {
      name: {
        singular: 'Milliwatt-hour',
        plural: 'Milliwatt-hours'
      },
      to_anchor: 3.6
    },
    kWh: {
      name: {
        singular: 'Kilowatt-hour',
        plural: 'Kilowatt-hours'
      },
      to_anchor: 3600000
    },
    MWh: {
      name: {
        singular: 'Megawatt-hour',
        plural: 'Megawatt-hours'
      },
      to_anchor: 3600000000
    },
    GWh: {
      name: {
        singular: 'Gigawatt-hour',
        plural: 'Gigawatt-hours'
      },
      to_anchor: 3600000000000
    },
    J: {
      name: {
        singular: 'Joule',
        plural: 'Joules'
      },
      to_anchor: 1
    },
    kJ: {
      name: {
        singular: 'Kilojoule',
        plural: 'Kilojoules'
      },
      to_anchor: 1000
    }
  }
};

var energy$1 = utils(energy);

export default energy$1;
