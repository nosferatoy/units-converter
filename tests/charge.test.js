
import { charge } from '../src/index.js'

const ACCURACY = 0.000001
const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('c to c', () => {
  expect(charge(1).from('c').to('c').value).toEqual(1)
})

test('c to mC', () => {
  expect(charge(1).from('c').to('mC').value).toEqual(1000)
})

test('mC to c', () => {
  expect(charge(1).from('mC').to('c').value).toEqual(1 / 1000)
})

test('c to μC', () => {
  expect(charge(1).from('c').to('μC').value).toEqual(1000000)
})

test('μC to c', () => {
  expect(charge(1).from('μC').to('c').value).toEqual(1 / 1000000)
})

test('nC to c', () => {
  expect(charge(1).from('nC').to('c').value).toEqual(1e-9)
})

test('c to pC', () => {
  expect(charge(1).from('c').to('pC').value).toEqual(1e12)
})

test('pC to c', () => {
  expect(charge(1).from('pC').to('c').value).toEqual(1e-12)
})

test('c to nC', () => {
  expect(percentError(1e9, charge(1).from('c').to('nC').value)).toBeLessThanOrEqual(ACCURACY)
})
