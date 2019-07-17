import { frequency } from '../src/index.js'

test('Hz to Hz', () => {
  expect(frequency(1).from('Hz').to('Hz').value).toEqual(1)
})

test('mHz to mHz', () => {
  expect(frequency(1).from('mHz').to('mHz').value).toEqual(1)
})

test('kHz to kHz', () => {
  expect(frequency(1).from('kHz').to('kHz').value).toEqual(1)
})

test('MHz to MHz', () => {
  expect(frequency(1).from('MHz').to('MHz').value).toEqual(1)
})

test('GHz to GHz', () => {
  expect(frequency(1).from('GHz').to('GHz').value).toEqual(1)
})

test('THz to THz', () => {
  expect(frequency(1).from('THz').to('THz').value).toEqual(1)
})

test('rpm to rpm', () => {
  expect(frequency(1).from('rpm').to('rpm').value).toEqual(1)
})

test('deg/s to deg/s', () => {
  expect(frequency(1).from('deg/s').to('deg/s').value).toEqual(1)
})

test('rad/s to rad/s', () => {
  expect(frequency(1).from('rad/s').to('rad/s').value).toEqual(1)
})

test('rpm to Hz', () => {
  expect(frequency(60).from('rpm').to('Hz').value).toEqual(1)
})

test('deg/s to Hz', () => {
  expect(frequency(360).from('deg/s').to('Hz').value).toEqual(1)
})

test('rad/s to Hz', () => {
  expect(frequency(Math.PI).from('rad/s').to('Hz').value).toEqual(0.5)
})

test('THz to GHz', () => {
  expect(frequency(1).from('THz').to('GHz').value).toEqual(1000)
})

test('mHz to MHz', () => {
  expect(frequency(1).from('mHz').to('MHz').value).toEqual(0.000000001)
})
