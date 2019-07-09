import pkg from './package.json'
import path from 'path'

const utils = path.resolve(__dirname, 'src/utils.js')

const acceleration = path.resolve(__dirname, 'src/units/acceleration.js')
const angle = path.resolve(__dirname, 'src/units/angle.js')
const apparentPower = path.resolve(__dirname, 'src/units/apparentPower.js')
const area = path.resolve(__dirname, 'src/units/area.js')
const charge = path.resolve(__dirname, 'src/units/charge.js')
const current = path.resolve(__dirname, 'src/units/current.js')
const digital = path.resolve(__dirname, 'src/units/digital.js')
const each = path.resolve(__dirname, 'src/units/each.js')
const energy = path.resolve(__dirname, 'src/units/energy.js')
const force = path.resolve(__dirname, 'src/units/force.js')
const frequency = path.resolve(__dirname, 'src/units/frequency.js')
const illuminance = path.resolve(__dirname, 'src/units/illuminance.js')
const length = path.resolve(__dirname, 'src/units/length.js')
const mass = path.resolve(__dirname, 'src/units/mass.js')
const pace = path.resolve(__dirname, 'src/units/pace.js')
const partsPer = path.resolve(__dirname, 'src/units/partsPer.js')
const power = path.resolve(__dirname, 'src/units/power.js')
const pressure = path.resolve(__dirname, 'src/units/pressure.js')
const reactiveEnergy = path.resolve(__dirname, 'src/units/reactiveEnergy.js')
const reactivePower = path.resolve(__dirname, 'src/units/reactivePower.js')
const speed = path.resolve(__dirname, 'src/units/speed.js')
const temperature = path.resolve(__dirname, 'src/units/temperature.js')
const time = path.resolve(__dirname, 'src/units/time.js')
const voltage = path.resolve(__dirname, 'src/units/voltage.js')
const volume = path.resolve(__dirname, 'src/units/volume.js')
const volumeFlowRate = path.resolve(__dirname, 'src/units/volumeFlowRate.js')

export default [
  {
    input: 'src/units/acceleration.js',
    output: [
      { name: 'acceleration', file: 'dist/units/acceleration.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/angle.js',
    output: [
      { name: 'angle', file: 'dist/units/angle.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/apparentPower.js',
    output: [
      { name: 'apparentPower', file: 'dist/units/apparentPower.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/area.js',
    output: [
      { name: 'area', file: 'dist/units/area.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/charge.js',
    output: [
      { name: 'charge', file: 'dist/units/charge.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/current.js',
    output: [
      { name: 'current', file: 'dist/units/current.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/digital.js',
    output: [
      { name: 'digital', file: 'dist/units/digital.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/each.js',
    output: [
      { name: 'each', file: 'dist/units/each.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/energy.js',
    output: [
      { name: 'energy', file: 'dist/units/energy.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/force.js',
    output: [
      { name: 'force', file: 'dist/units/force.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/frequency.js',
    output: [
      { name: 'frequency', file: 'dist/units/frequency.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/illuminance.js',
    output: [
      { name: 'illuminance', file: 'dist/units/illuminance.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/length.js',
    output: [
      { name: 'length', file: 'dist/units/length.js', format: 'es' }
      // { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/mass.js',
    output: [
      { name: 'mass', file: 'dist/units/mass.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/pace.js',
    output: [
      { name: 'pace', file: 'dist/units/pace.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/partsPer.js',
    output: [
      { name: 'partsPer', file: 'dist/units/partsPer.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/power.js',
    output: [
      { name: 'power', file: 'dist/units/power.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/pressure.js',
    output: [
      { name: 'pressure', file: 'dist/units/pressure.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/reactiveEnergy.js',
    output: [
      { name: 'reactiveEnergy', file: 'dist/units/reactiveEnergy.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/reactivePower.js',
    output: [
      { name: 'reactivePower', file: 'dist/units/reactivePower.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/speed.js',
    output: [
      { name: 'speed', file: 'dist/units/speed.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/temperature.js',
    output: [
      { name: 'temperature', file: 'dist/units/temperature.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/time.js',
    output: [
      { name: 'time', file: 'dist/units/time.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/voltage.js',
    output: [
      { name: 'voltage', file: 'dist/units/voltage.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/volume.js',
    output: [
      { name: 'volume', file: 'dist/units/volume.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/units/volumeFlowRate.js',
    output: [
      { name: 'volumeFlowRate', file: 'dist/units/volumeFlowRate.js', format: 'es' }
      // { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
    ],
    external: [utils]
  },
  {
    input: 'src/utils.js',
    output: [
      { name: 'utils', file: 'dist/utils.js', format: 'es' }
      // { name: 'utils', file: 'dist/utils.cjs.js', format: 'cjs' },
    ]
  },
  {
    input: 'src/index.js',
    output: [
      // { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    external: [acceleration, angle, apparentPower, area, charge, current, digital, each, energy, force, frequency, 
      illuminance, length, mass, pace, partsPer, power, pressure, reactiveEnergy, reactivePower, speed, temperature, 
      time, voltage, volume, volumeFlowRate]
  }]
