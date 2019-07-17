import { time } from '../src/index.js'

var ACCURACY = 0.000001

const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('s to mu', () => {
  expect(time(1).from('s').to('mu').value).toEqual(1000000)
})

test('s to ms', () => {
  expect(time(1).from('s').to('ms').value).toEqual(1000)
})

test('s to min', () => {
  expect(time(60).from('s').to('min').value).toEqual(1)
})

test('s to s', () => {
  expect(time(1).from('s').to('s').value).toEqual(1)
})

test('s to h', () => {
  expect(time(3600).from('s').to('h').value).toEqual(1)
})

test('s to d', () => {
  expect(time(86400).from('s').to('d').value).toEqual(1)
})

test('d to week', () => {
  expect(time(7).from('d').to('week').value).toEqual(1)
})

test('d to month', () => {
  expect(time(30.4375).from('d').to('month').value).toEqual(1)
})

test('d to year', () => {
  expect(time(365.25).from('d').to('year').value).toEqual(1)
})

test('month to year', () => {
  expect(time(12).from('month').to('year').value).toEqual(1)
})

test('s to ns', () => {
  expect(percentError(1000000000, time(1).from('s').to('ns').value)).toBeLessThanOrEqual(ACCURACY)
})

test('week to month', () => {
  expect(percentError(1, time(4.34821).from('week').to('month').value)).toBeLessThanOrEqual(ACCURACY)
})

test('week to year', () => {
  expect(percentError(1, time(52.17857).from('week').to('year').value)).toBeLessThanOrEqual(ACCURACY)
})
