import { energy } from '../src/index.js'

test('Wh to Wh', () => {
  expect(energy(1).from('Wh').to('Wh').value).toEqual(1)
})

test('mWh to mWh', () => {
  expect(energy(1).from('mWh').to('mWh').value).toEqual(1)
})

test('kWh to kWh', () => {
  expect(energy(1).from('kWh').to('kWh').value).toEqual(1)
})

test('MWh to MWh', () => {
  expect(energy(1).from('MWh').to('MWh').value).toEqual(1)
})

test('GWh to GWh', () => {
  expect(energy(1).from('GWh').to('GWh').value).toEqual(1)
})

test('J to J', () => {
  expect(energy(1).from('J').to('J').value).toEqual(1)
})

test('kJ to kJ', () => {
  expect(energy(1).from('kJ').to('kJ').value).toEqual(1)
})

test('Wh to J', () => {
  expect(energy(1).from('Wh').to('J').value).toEqual(3600)
})

test('Wh to mWh', () => {
  expect(energy(1).from('Wh').to('mWh').value).toEqual(1000)
})

test('Wh to kWh', () => {
  expect(energy(1).from('Wh').to('kWh').value).toEqual(0.001)
})

test('Wh to MWh', () => {
  expect(energy(1).from('Wh').to('MWh').value).toEqual(0.000001)
})

test('Wh to GWh', () => {
  expect(energy(1).from('Wh').to('GWh').value).toEqual(0.000000001)
})

test('GWh to mWh', () => {
  expect(energy(1).from('GWh').to('mWh').value).toEqual(1000000000000)
})

test('GWh to J', () => {
  expect(energy(1).from('GWh').to('J').value).toEqual(3600000000000)
})

test('MWh to mWh', () => {
  expect(energy(1).from('MWh').to('mWh').value).toEqual(1000000000)
})

test('kWh to mWh', () => {
  expect(energy(1).from('kWh').to('mWh').value).toEqual(1000000)
})

test('mWh to kWh', () => {
  expect(energy(1).from('mWh').to('kWh').value).toEqual(0.000001)
})

test('mWh to Wh', () => {
  expect(energy(1).from('mWh').to('Wh').value).toEqual(0.001)
})

test('kWh to Wh', () => {
  expect(energy(1).from('kWh').to('Wh').value).toEqual(1000)
})

test('kWh to kJ', () => {
  expect(energy(1).from('kWh').to('kJ').value).toEqual(3600)
})
