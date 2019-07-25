import pkg from './package.json'
import path from 'path'
import { terser } from 'rollup-plugin-terser'

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
      { name: 'acceleration', file: 'dist/es/units/acceleration.js', format: 'es' },
      { name: 'acceleration', file: 'dist/cjs/units/acceleration.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/angle.js',
    output: [
      { name: 'angle', file: 'dist/es/units/angle.js', format: 'es' },
      { name: 'angle', file: 'dist/cjs/units/angle.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/apparentPower.js',
    output: [
      { name: 'apparentPower', file: 'dist/es/units/apparentPower.js', format: 'es' },
      { name: 'apparentPower', file: 'dist/cjs/units/apparentPower.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/area.js',
    output: [
      { name: 'area', file: 'dist/es/units/area.js', format: 'es' },
      { name: 'area', file: 'dist/cjs/units/area.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/charge.js',
    output: [
      { name: 'charge', file: 'dist/es/units/charge.js', format: 'es' },
      { name: 'charge', file: 'dist/cjs/units/charge.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/current.js',
    output: [
      { name: 'current', file: 'dist/es/units/current.js', format: 'es' },
      { name: 'current', file: 'dist/cjs/units/current.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/digital.js',
    output: [
      { name: 'digital', file: 'dist/es/units/digital.js', format: 'es' },
      { name: 'digital', file: 'dist/cjs/units/digital.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/each.js',
    output: [
      { name: 'each', file: 'dist/es/units/each.js', format: 'es' },
      { name: 'each', file: 'dist/cjs/units/each.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/energy.js',
    output: [
      { name: 'energy', file: 'dist/es/units/energy.js', format: 'es' },
      { name: 'energy', file: 'dist/cjs/units/energy.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/force.js',
    output: [
      { name: 'force', file: 'dist/es/units/force.js', format: 'es' },
      { name: 'force', file: 'dist/cjs/units/force.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/frequency.js',
    output: [
      { name: 'frequency', file: 'dist/es/units/frequency.js', format: 'es' },
      { name: 'frequency', file: 'dist/cjs/units/frequency.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/illuminance.js',
    output: [
      { name: 'illuminance', file: 'dist/es/units/illuminance.js', format: 'es' },
      { name: 'illuminance', file: 'dist/cjs/units/illuminance.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/length.js',
    output: [
      { name: 'length', file: 'dist/es/units/length.js', format: 'es' },
      { name: 'length', file: 'dist/cjs/units/length.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/mass.js',
    output: [
      { name: 'mass', file: 'dist/es/units/mass.js', format: 'es' },
      { name: 'mass', file: 'dist/cjs/units/mass.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/pace.js',
    output: [
      { name: 'pace', file: 'dist/es/units/pace.js', format: 'es' },
      { name: 'pace', file: 'dist/cjs/units/pace.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/partsPer.js',
    output: [
      { name: 'partsPer', file: 'dist/es/units/partsPer.js', format: 'es' },
      { name: 'partsPer', file: 'dist/cjs/units/partsPer.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/power.js',
    output: [
      { name: 'power', file: 'dist/es/units/power.js', format: 'es' },
      { name: 'power', file: 'dist/cjs/units/power.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/pressure.js',
    output: [
      { name: 'pressure', file: 'dist/es/units/pressure.js', format: 'es' },
      { name: 'pressure', file: 'dist/cjs/units/pressure.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/reactiveEnergy.js',
    output: [
      { name: 'reactiveEnergy', file: 'dist/es/units/reactiveEnergy.js', format: 'es' },
      { name: 'reactiveEnergy', file: 'dist/cjs/units/reactiveEnergy.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/reactivePower.js',
    output: [
      { name: 'reactivePower', file: 'dist/es/units/reactivePower.js', format: 'es' },
      { name: 'reactivePower', file: 'dist/cjs/units/reactivePower.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/speed.js',
    output: [
      { name: 'speed', file: 'dist/es/units/speed.js', format: 'es' },
      { name: 'speed', file: 'dist/cjs/units/speed.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/temperature.js',
    output: [
      { name: 'temperature', file: 'dist/es/units/temperature.js', format: 'es' },
      { name: 'temperature', file: 'dist/cjs/units/temperature.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/time.js',
    output: [
      { name: 'time', file: 'dist/es/units/time.js', format: 'es' },
      { name: 'time', file: 'dist/cjs/units/time.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/voltage.js',
    output: [
      { name: 'voltage', file: 'dist/es/units/voltage.js', format: 'es' },
      { name: 'voltage', file: 'dist/cjs/units/voltage.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/volume.js',
    output: [
      { name: 'volume', file: 'dist/es/units/volume.js', format: 'es' },
      { name: 'volume', file: 'dist/cjs/units/volume.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/units/volumeFlowRate.js',
    output: [
      { name: 'volumeFlowRate', file: 'dist/es/units/volumeFlowRate.js', format: 'es' },
      { name: 'volumeFlowRate', file: 'dist/cjs/units/volumeFlowRate.js', format: 'cjs' }
    ],
    external: [utils]
  },
  {
    input: 'src/utils.js',
    output: [
      { name: 'utils', file: 'dist/es/utils.js', format: 'es' },
      { name: 'utils', file: 'dist/cjs/utils.js', format: 'cjs' }
    ]
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    external: [acceleration, angle, apparentPower, area, charge, current, digital, each, energy, force, frequency,
      illuminance, length, mass, pace, partsPer, power, pressure, reactiveEnergy, reactivePower, speed, temperature,
      time, voltage, volume, volumeFlowRate]
  },
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: [{
      compact: true,
      name: 'converter',
      file: pkg.browser,
      format: 'umd',
      esModule: false
    }]
  }
]
