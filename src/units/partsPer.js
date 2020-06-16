import utils from '../utils.js'

const partsPer = {
  metric: {
    baseUnit: 'ppm',
    transform: (val) => (val / 17.1),
    ppm: {
      name: {
        singular: 'Part-per Million',
        plural: 'Parts-per Million'
      },
      to_anchor: 1
    },
    ppb: {
      name: {
        singular: 'Part-per Billion',
        plural: 'Parts-per Billion'
      },
      to_anchor: 0.001
    },
    ppt: {
      name: {
        singular: 'Part-per Trillion',
        plural: 'Parts-per Trillion'
      },
      to_anchor: 0.000001
    },
    ppq: {
      name: {
        singular: 'Part-per Quadrillion',
        plural: 'Parts-per Quadrillion'
      },
      to_anchor: 0.000000001
    }
  },
  imperial: {
    baseUnit: 'gpg',
    transform: (val) => (val * 17.1),
    gpg: {
      name: {
        singular: 'Grain-per Gallon',
        plural: 'Grains-per Gallon'
      },
      to_anchor: 1
    }
  }
}

export default utils(partsPer)
