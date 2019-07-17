import { angle } from '../src/index.js'

const ACCURACY = 1 / 1000
const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('rad to rad', () => {
  expect(angle(1).from('rad').to('rad').value).toEqual(1)
})

test('deg to deg', () => {
  expect(angle(1).from('deg').to('deg').value).toEqual(1)
})

test('grad to grad', () => {
  expect(angle(1).from('grad').to('grad').value).toEqual(1)
})

test('deg to grad', () => {
  expect(angle(360).from('deg').to('grad').value).toEqual(400)
})

test('deg to arcmin', () => {
  expect(angle(360).from('deg').to('arcmin').value).toEqual(21600)
})

test('deg to arcsec', () => {
  expect(angle(360).from('deg').to('arcsec').value).toEqual(1.296e+6)
})

test('grad to arcmin', () => {
  expect(angle(5).from('grad').to('arcmin').value).toEqual(270)
})

test('grad to deg', () => {
  expect(angle(5).from('grad').to('deg').value).toEqual(4.5)
})

// When converting between systems, expect < 0.1% error
test('deg to rad', () => {
  expect(percentError(6.28319, angle(360).from('deg').to('rad').value)).toBeLessThanOrEqual(ACCURACY)
})

test('rad to grad', () => {
  expect(percentError(636.62, angle(10).from('rad').to('grad').value)).toBeLessThanOrEqual(ACCURACY)
})

test('rad to arcsec', () => {
  expect(percentError(2.063e+6, angle(10).from('rad').to('arcsec').value)).toBeLessThanOrEqual(ACCURACY)
})

test('arcmin to rad', () => {
  expect(percentError(2.908882, angle(10000).from('arcmin').to('rad').value)).toBeLessThanOrEqual(ACCURACY)
})
