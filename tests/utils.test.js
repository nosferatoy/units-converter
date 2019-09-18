import * as converter from '../src/index.js'

describe('Test to best', () => {
  test('best mm', () => {
    expect(converter.length(1200).from('mm').toBest()).toEqual({
      value: 1.2,
      unit: 'm',
      system: 'metric',
      singular: 'Meter',
      plural: 'Meters'
    })
  })

  test('best mm with excludes measurements km and m', () => {
    expect(converter.length(1200000).from('mm').toBest({ exclude: ['km', 'm'] })).toEqual({
      value: 12,
      unit: 'hm',
      system: 'metric',
      singular: 'Hectometre',
      plural: 'Hectometres'
    })
  })

  test('best mm with excludes measurements hm, km, dam, m and dm', () => {
    expect(converter.length(1200000).from('mm').toBest({ exclude: ['hm', 'km', 'dam', 'm', 'dm'] })).toEqual({
      value: 120000,
      unit: 'cm',
      system: 'metric',
      singular: 'Centimeter',
      plural: 'Centimeters'
    })
  })

  test('best km excluding self', () => {
    expect(converter.length(10).from('km').toBest({ exclude: ['km'] })).toEqual({
      value: 100,
      unit: 'hm',
      system: 'metric',
      singular: 'Hectometre',
      plural: 'Hectometres'
    })
  })

  test('if all measurements are excluded return self', () => {
    expect(converter.length(10).from('km').toBest({ exclude: ['mm, cm, dm, m, dam ,hm, km'] })).toEqual({
      value: 10,
      unit: 'km',
      system: 'metric',
      singular: 'Kilometer',
      plural: 'Kilometers'
    })
  })

  test('pre-cut off numbe', () => {
    expect(converter.length(9000).from('mm').toBest({ cutOffNumber: 10 })).toEqual({
      value: 90,
      unit: 'dm',
      system: 'metric',
      singular: 'Decimetre',
      plural: 'Decimetres'
    })
  })

  test('post-cut off number', () => {
    expect(converter.length(10000).from('mm').toBest({ cutOffNumber: 10 })).toEqual({
      value: 10,
      unit: 'm',
      system: 'metric',
      singular: 'Meter',
      plural: 'Meters'
    })
  })
})

describe('Test to describe', () => {
  test('get kg', () => {
    expect(converter.mass().describe('kg')).toEqual({
      unit: 'kg',
      system: 'metric',
      singular: 'Kilogram',
      plural: 'Kilograms'
    })
  })

  test('get ac', () => {
    expect(converter.area().describe('ac')).toEqual({
      unit: 'ac',
      system: 'imperial',
      singular: 'Acre',
      plural: 'Acres'
    })
  })
})

describe('Test the error handling', () => {
  test('ltr to kg throws', () => {
    expect(() => { converter.volume(2).from('ltr').to('kg') }).toThrow(Error)
  })

  test('fl-oz to oz throws', () => {
    expect(() => { converter.volume(2).from('fl-oz').to('oz') }).toThrow(Error)
  })

  test('kg to fl-oz throws', () => {
    expect(() => { converter.mass(2).from('kg').to('fl-oz') }).toThrow(Error)
  })

  test('kg to ft throws', () => {
    expect(() => { converter.mass(2).from('kg').to('ft') }).toThrow(Error)
  })

  test('kg to nonexistant unit throws', () => {
    expect(() => { converter.mass(2).from('kg').to('garbage') }).toThrow(Error)
  })

  test('nonexistant unit to kg throws', () => {
    expect(() => { converter.mass(2).from('nonexistant unit') }).toThrow(Error)
  })

  test('.to before .from throws', () => {
    expect(() => { converter.mass(2).to('kg').to('fl-oz') }).toThrow(Error)
  })
})

describe('Test the list', () => {
  test('list', () => {
    let list = converter.mass().list()
    let firstItem = list[0]
    expect(firstItem).toHaveProperty('unit')
    expect(typeof firstItem.unit).toBe('string')
    expect(firstItem).toHaveProperty('singular')
    expect(typeof firstItem.singular).toBe('string')
    expect(firstItem).toHaveProperty('singular')
    expect(typeof firstItem.singular).toBe('string')
    expect(firstItem).toHaveProperty('plural')
    expect(typeof firstItem.plural).toBe('string')
  })
})

describe('Test the possibilities', () => {
  test('l possibilities', () => {
    const expected = ['mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3']
    expect(converter.volume().from('l').possibilities()).toEqual(expected)
  })

  test('kg possibilities', () => {
    const expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't']
    expect(converter.mass().from('kg').possibilities()).toEqual(expected)
  })

  test('m possibilities', () => {
    const expected = ['ym', 'zm', 'am', 'fm', 'pm', 'nm', 'µm', 'mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km', 'Mm', 'Gm', 'Tm', 'Pm', 'Em', 'Zm', 'Ym', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi', 'au', 'ly', 'pc']
    expect(converter.length().from('m').possibilities()).toEqual(expected)
  })

  test('each possibilities', () => {
    const expected = ['ea', 'dz']
    expect(converter.each().possibilities()).toEqual(expected)
  })

  test('mass possibilities', () => {
    const expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't']
    expect(converter.mass().possibilities()).toEqual(expected)
  })

  test('volume possibilities', () => {
    const expected = ['mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3']
    expect(converter.volume().possibilities()).toEqual(expected)
  })

  test('volume flow rate possibilities', () => {
    const expected = ['mm3/s', 'cm3/s', 'ml/s', 'cl/s', 'dl/s', 'l/s', 'l/min', 'l/h', 'kl/s', 'kl/min', 'kl/h', 'm3/s', 'm3/min', 'm3/h', 'km3/s', 'tsp/s', 'Tbs/s', 'in3/s', 'in3/min', 'in3/h', 'fl-oz/s', 'fl-oz/min', 'fl-oz/h', 'cup/s', 'pnt/s', 'pnt/min', 'pnt/h', 'qt/s', 'gal/s', 'gal/min', 'gal/h', 'ft3/s', 'ft3/min', 'ft3/h', 'yd3/s', 'yd3/min', 'yd3/h']
    expect(converter.volumeFlowRate().possibilities()).toEqual(expected)
  })

  test('length possibilities', () => {
    const expected = ['ym', 'zm', 'am', 'fm', 'pm', 'nm', 'µm', 'mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km', 'Mm', 'Gm', 'Tm', 'Pm', 'Em', 'Zm', 'Ym', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi', 'au', 'ly', 'pc']
    expect(converter.length().possibilities()).toEqual(expected)
  })

  test('temperature possibilities', () => {
    const expected = ['C', 'K', 'F', 'R']
    expect(converter.temperature().possibilities()).toEqual(expected)
  })

  test('time possibilities', () => {
    const expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year']
    expect(converter.time().possibilities()).toEqual(expected)
  })

  test('digital possibilities', () => {
    const expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB']
    expect(converter.digital().possibilities()).toEqual(expected)
  })

  test('partsPer possibilities', () => {
    const expected = ['ppm', 'ppb', 'ppt', 'ppq']
    expect(converter.partsPer().possibilities()).toEqual(expected)
  })

  test('pressure possibilities', () => {
    const expected = ['Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi']
    expect(converter.pressure().possibilities()).toEqual(expected)
  })

  test('speed possibilities', () => {
    const expected = ['m/s', 'km/h', 'm/h', 'knot', 'ft/s']
    expect(converter.speed().possibilities()).toEqual(expected)
  })

  test('pace possibilities', () => {
    const expected = ['min/km', 's/m', 'min/mi', 's/ft']
    expect(converter.pace().possibilities()).toEqual(expected)
  })

  test('current possibilities', () => {
    const expected = ['A', 'mA', 'kA']
    expect(converter.current().possibilities()).toEqual(expected)
  })

  test('voltage possibilities', () => {
    const expected = ['V', 'mV', 'kV']
    expect(converter.voltage().possibilities()).toEqual(expected)
  })

  test('power possibilities', () => {
    const expected = ['W', 'mW', 'kW', 'MW', 'GW']
    expect(converter.power().possibilities()).toEqual(expected)
  })

  test('reactivePower possibilities', () => {
    const expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR']
    expect(converter.reactivePower().possibilities()).toEqual(expected)
  })

  test('apparentPower possibilities', () => {
    const expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA']
    expect(converter.apparentPower().possibilities()).toEqual(expected)
  })

  test('energy possibilities', () => {
    const expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ']
    expect(converter.energy().possibilities()).toEqual(expected)
  })

  test('reactiveEnergy possibilities', () => {
    const expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh']
    expect(converter.reactiveEnergy().possibilities()).toEqual(expected)
  })

  test('frequency possibilities', () => {
    const expected = ['mHz', 'Hz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s']
    expect(converter.frequency().possibilities()).toEqual(expected)
  })

  test('illuminance possibilities', () => {
    const expected = ['lx', 'ft-cd']
    expect(converter.illuminance().possibilities()).toEqual(expected)
  })

  test('angle possibilities', () => {
    const expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec']
    expect(converter.angle().possibilities()).toEqual(expected)
  })

  test('charge possibilities', () => {
    const expected = ['c', 'mC', 'μC', 'nC', 'pC']
    expect(converter.charge().possibilities()).toEqual(expected)
  })

  test('force possibilities', () => {
    const expected = ['N', 'kN', 'lbf']
    expect(converter.force().possibilities()).toEqual(expected)
  })

  test('acceleration possibilities', () => {
    const expected = ['g-force', 'm/s2']
    expect(converter.acceleration().possibilities()).toEqual(expected)
  })
})
