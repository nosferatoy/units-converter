import { volumeFlowRate } from '../src/index.js'

var ACCURACY = 1 / 1000

const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('l/s to l/s', () => {
  expect(volumeFlowRate(2).from('l/s').to('l/s').value).toEqual(2)
})

test('mm3/s to l/s', () => {
  expect(volumeFlowRate(1000000).from('mm3/s').to('l/s').value).toEqual(1)
})

test('cm3/s to l/s', () => {
  expect(volumeFlowRate(100).from('cm3/s').to('l/s').value).toEqual(1 / 10)
})

test('dl/s to l/s', () => {
  expect(volumeFlowRate(2).from('dl/s').to('l/s').value).toEqual(0.2)
})

test('cl/s to l/s', () => {
  expect(volumeFlowRate(25).from('cl/s').to('l/s').value).toEqual(0.25)
})

test('ml/s to l/s', () => {
  expect(volumeFlowRate(100).from('ml/s').to('l/s').value).toEqual(1 / 10)
})

test('m3/s to l/s', () => {
  expect(volumeFlowRate(1).from('m3/s').to('l/s').value).toEqual(1000)
})

test('km3/s to l/s', () => {
  expect(volumeFlowRate(1).from('km3/s').to('l/s').value).toEqual(1000000000000)
})

test('l/s to ml/s', () => {
  expect(volumeFlowRate(1).from('l/s').to('ml/s').value).toEqual(1000)
})

test('dl/s to ml/s', () => {
  expect(volumeFlowRate(10).from('dl/s').to('ml/s').value).toEqual(1000)
})

test('cl/s to ml/s', () => {
  expect(volumeFlowRate(100).from('cl/s').to('ml/s').value).toEqual(1000)
})

test('ml/s to ml/s', () => {
  expect(volumeFlowRate(13).from('ml/s').to('ml/s').value).toEqual(13)
})

test('fl-oz/s to fl-oz/s', () => {
  expect(volumeFlowRate(62).from('fl-oz/s').to('fl-oz/s').value).toEqual(62)
})

test('fl-oz/s to Tbs/s', () => {
  expect(volumeFlowRate(4).from('fl-oz/s').to('Tbs/s').value).toEqual(8)
})

test('Tbs/s to fl-oz/s', () => {
  expect(volumeFlowRate(2).from('Tbs/s').to('fl-oz/s').value).toEqual(1)
})

test('Tbs/s to Tbs/s', () => {
  expect(volumeFlowRate(140).from('Tbs/s').to('Tbs/s').value).toEqual(140)
})

test('l/s to l/min', () => {
  expect(volumeFlowRate(1).from('l/s').to('l/min').value).toEqual(60)
})

test('l/s to l/h', () => {
  expect(volumeFlowRate(1).from('l/s').to('l/h').value).toEqual(3600)
})

test('kl/s to kl/h', () => {
  expect(volumeFlowRate(1).from('kl/s').to('kl/h').value).toEqual(3600)
})

test('l/s to m3/s', () => {
  expect(volumeFlowRate(1).from('l/s').to('m3/s').value).toEqual(0.001)
})

test('kl/s to kl/h', () => {
  expect(volumeFlowRate(1).from('kl/s').to('kl/h').value).toEqual(3600)
})

// When converting between systems, expect < 0.1% error
test('tsp/s to l/s', () => {
  expect(percentError(1.75, volumeFlowRate(355).from('tsp/s').to('l/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('in3/s to l/s', () => {
  expect(percentError(0.0163871, volumeFlowRate(1).from('in3/s').to('l/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('in3/s to fl-oz/s', () => {
  expect(percentError(0.554113, volumeFlowRate(1).from('in3/s').to('fl-oz/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('m3/s to yd3/s', () => {
  expect(percentError(1.30795, volumeFlowRate(1).from('m3/s').to('yd3/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('ft3/s to cm3/s', () => {
  expect(percentError(28316.8, volumeFlowRate(1).from('ft3/s').to('cm3/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('pnt/s to ml/s', () => {
  expect(percentError(2366, volumeFlowRate(5).from('pnt/s').to('ml/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('ml/s to gal/s', () => {
  expect(percentError(2.609, volumeFlowRate(9876).from('ml/s').to('gal/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('gal/s to l/s', () => {
  expect(percentError(3.78541178, volumeFlowRate(1).from('gal/s').to('l/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('kl/s to kl/min', () => {
  expect(percentError(60, volumeFlowRate(1).from('kl/s').to('kl/min').value)).toBeLessThanOrEqual(ACCURACY)
})

test('l/s to kl/h', () => {
  expect(percentError(3.6, volumeFlowRate(1).from('l/s').to('kl/h').value)).toBeLessThanOrEqual(ACCURACY)
})

test('kl/min to l/h', () => {
  expect(percentError(60000, volumeFlowRate(1).from('kl/min').to('l/h').value)).toBeLessThanOrEqual(ACCURACY)
})

test('l/s to m3/h', () => {
  expect(percentError(3.6, volumeFlowRate(1).from('l/s').to('m3/h').value)).toBeLessThanOrEqual(ACCURACY)
})

test('m3/s to kl/h', () => {
  expect(percentError(3600, volumeFlowRate(1).from('m3/s').to('kl/h').value)).toBeLessThanOrEqual(ACCURACY)
})

test('fl-oz/s to m3/min', () => {
  expect(percentError(0.00177441177, volumeFlowRate(1).from('fl-oz/s').to('m3/min').value)).toBeLessThanOrEqual(ACCURACY)
})

test('ft3/min to l/s', () => {
  expect(percentError(0.471947443, volumeFlowRate(1).from('ft3/min').to('l/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('pnt/min to kl/h', () => {
  expect(percentError(0.0283905884, volumeFlowRate(1).from('pnt/min').to('kl/h').value)).toBeLessThanOrEqual(ACCURACY)
})

test('yd3/h to m3/min', () => {
  expect(percentError(0.012742581, volumeFlowRate(1).from('yd3/h').to('m3/min').value)).toBeLessThanOrEqual(ACCURACY)
})
