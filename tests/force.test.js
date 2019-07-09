import { force } from '../src/index.js'

var ACCURACY = 0.000001

const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('N to kN', () => {
  expect(force(1).from('N').to('kN').value).toEqual(1 / 1000)
})

test('kN to N', () => {
  expect(force(1).from('kN').to('N').value).toEqual(1000)
})

test('N to lbf', () => {
  expect(percentError(0.224809, force(1).from('N').to('lbf').value)).toBeLessThanOrEqual(ACCURACY)
})

test('lbf to N', () => {
  expect(percentError(4.44822, force(1).from('lbf').to('N').value)).toBeLessThanOrEqual(ACCURACY)
})