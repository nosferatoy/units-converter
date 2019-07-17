import { digital } from '../src/index.js'

const ACCURACY = 1 / 1000
const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('b to b', () => {
  expect(digital(1).from('b').to('b').value).toEqual(1)
})

test('Kb to b', () => {
  expect(digital(1).from('Kb').to('b').value).toEqual(1024)
})

test('Mb to b', () => {
  expect(digital(1).from('Mb').to('b').value).toEqual(1048576)
})

test('Gb to b', () => {
  expect(digital(1).from('Gb').to('b').value).toEqual(1073741824)
})

test('Tb to b', () => {
  expect(digital(1).from('Tb').to('b').value).toEqual(1099511627776)
})

test('B to B', () => {
  expect(digital(1).from('B').to('B').value).toEqual(1)
})

test('KB to B', () => {
  expect(digital(1).from('KB').to('B').value).toEqual(1024)
})

test('MB to B', () => {
  expect(digital(1).from('MB').to('B').value).toEqual(1048576)
})

test('GB to B', () => {
  expect(digital(1).from('GB').to('B').value).toEqual(1073741824)
})

test('TB to B', () => {
  expect(digital(1).from('TB').to('B').value).toEqual(1099511627776)
})

// When converting between systems, expect < 0.1% error
test('B to b', () => {
  expect(percentError(8, digital(1).from('B').to('b').value)).toBeLessThanOrEqual(ACCURACY)
})

test('b to B', () => {
  expect(percentError(0.125, digital(1).from('b').to('B').value)).toBeLessThanOrEqual(ACCURACY)
})
