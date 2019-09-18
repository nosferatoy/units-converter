import utils from '../utils.js'

const RATIO = {
  metric: {
    astronomical: 1.496e+11,
    imperial: 3.28084
  },
  astronomical: {
    metric: 1 / 1.496e+11,
    imperial: 1 / 4.908e+11
  },
  imperial: {
    astronomical: 4.908e+11,
    metric: 1 / 3.28084
  }
}

const FUNCTION = (val, origin, destination) => { return val * RATIO[origin][destination] }

const length = {
  metric: {
    baseUnit: 'm',
    transform: FUNCTION,
    ym: {
      name: {
        singular: 'Yeptometre',
        plural: 'Yeptometres'
      },
      to_anchor: 1 / 1000000000000000000000000
    },
    zm: {
      name: {
        singular: 'Zeptometre',
        plural: 'Zeptometres'
      },
      to_anchor: 1 / 1000000000000000000000
    },
    am: {
      name: {
        singular: 'Attometre',
        plural: 'Attometres'
      },
      to_anchor: 1 / 1000000000000000000
    },
    fm: {
      name: {
        singular: 'Femtometre',
        plural: 'Femtometres'
      },
      to_anchor: 1 / 1000000000000000
    },
    pm: {
      name: {
        singular: 'Picometre',
        plural: 'Picometres'
      },
      to_anchor: 1 / 1000000000000
    },
    nm: {
      name: {
        singular: 'Nanometre',
        plural: 'Nanometres'
      },
      to_anchor: 1 / 1000000000
    },
    µm: {
      name: {
        singular: 'Micrometre',
        plural: 'Micrometres'
      },
      to_anchor: 1 / 1000000
    },
    mm: {
      name: {
        singular: 'Millimeter',
        plural: 'Millimeters'
      },
      to_anchor: 1 / 1000
    },
    cm: {
      name: {
        singular: 'Centimeter',
        plural: 'Centimeters'
      },
      to_anchor: 1 / 100
    },
    dm: {
      name: {
        singular: 'Decimetre',
        plural: 'Decimetres'
      },
      to_anchor: 1 / 10
    },
    m: {
      name: {
        singular: 'Meter',
        plural: 'Meters'
      },
      to_anchor: 1
    },
    dam: {
      name: {
        singular: 'Decametre',
        plural: 'Decametres'
      },
      to_anchor: 10
    },
    hm: {
      name: {
        singular: 'Hectometre',
        plural: 'Hectometres'
      },
      to_anchor: 100
    },
    km: {
      name: {
        singular: 'Kilometer',
        plural: 'Kilometers'
      },
      to_anchor: 1000
    },
    Mm: {
      name: {
        singular: 'Megametre',
        plural: 'Megametres'
      },
      to_anchor: 1000000
    },
    Gm: {
      name: {
        singular: 'Gigametre',
        plural: 'Gigametres'
      },
      to_anchor: 1000000000
    },
    Tm: {
      name: {
        singular: 'Terametre',
        plural: 'Terametres'
      },
      to_anchor: 1000000000000
    },
    Pm: {
      name: {
        singular: 'Petametre',
        plural: 'Petametres'
      },
      to_anchor: 1000000000000000
    },
    Em: {
      name: {
        singular: 'Exametre',
        plural: 'Exametres'
      },
      to_anchor: 1000000000000000000
    },
    Zm: {
      name: {
        singular: 'Zettametre',
        plural: 'Zettametres'
      },
      to_anchor: 1000000000000000000000
    },
    Ym: {
      name: {
        singular: 'Yottametre',
        plural: 'Yottametres'
      },
      to_anchor: 1000000000000000000000000
    }
  },
  imperial: {
    baseUnit: 'ft',
    transform: FUNCTION,
    'in': {
      name: {
        singular: 'Inch',
        plural: 'Inches'
      },
      to_anchor: 1 / 12
    },
    yd: {
      name: {
        singular: 'Yard',
        plural: 'Yards'
      },
      to_anchor: 3
    },
    'ft-us': {
      name: {
        singular: 'US Survey Foot',
        plural: 'US Survey Feet'
      },
      to_anchor: 1.000002
    },
    ft: {
      name: {
        singular: 'Foot',
        plural: 'Feet'
      },
      to_anchor: 1
    },
    fathom: {
      name: {
        singular: 'Fathom',
        plural: 'Fathoms'
      },
      to_anchor: 6
    },
    mi: {
      name: {
        singular: 'Mile',
        plural: 'Miles'
      },
      to_anchor: 5280
    },
    nMi: {
      name: {
        singular: 'Nautical Mile',
        plural: 'Nautical Miles'
      },
      to_anchor: 6076.12
    }
  },
  astronomical: {
    baseUnit: 'au',
    transform: FUNCTION,
    au: {
      name: {
        singular: 'Astronomical unit',
        plural: 'Astronomical units'
      },
      to_anchor: 1
    },
    ly: {
      name: {
        singular: 'Light-year',
        plural: 'Light years'
      },
      to_anchor: 63241.1
    },
    pc: {
      name: {
        singular: 'Parsec',
        plural: 'Parsecs'
      },
      to_anchor: 206265
    }
  }
}

export default utils(length)
