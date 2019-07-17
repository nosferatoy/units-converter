import { area } from '../src/index.js'

const ACCURACY = 1 / 1000
const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('ft2 to ft2', () => {
  expect(area(1).from('ft2').to('ft2').value).toEqual(1)
})

test('ft2 to in2', () => {
  expect(area(1).from('ft2').to('in2').value).toEqual(144)
})

test('in2 to ft2', () => {
  expect(area(1).from('in2').to('ft2').value).toEqual(1 / 144)
})

test('ft2 to ac', () => {
  expect(area(1).from('ft2').to('ac').value).toEqual(1 / 43560)
})

test('ac to ft2', () => {
  expect(area(1).from('ac').to('ft2').value).toEqual(43560)
})

test('ft2 to mi2', () => {
  expect(area(1).from('ft2').to('mi2').value).toEqual(1 / 27878400)
})

test('mi2 to ft2', () => {
  expect(area(1).from('mi2').to('ft2').value).toEqual(27878400)
})

test('m2 to m2', () => {
  expect(area(1).from('m2').to('m2').value).toEqual(1)
})

test('m2 to cm2', () => {
  expect(area(1).from('m2').to('cm2').value).toEqual(10000)
})

test('cm2 to m2', () => {
  expect(area(1).from('cm2').to('m2').value).toEqual(1 / 10000)
})

test('m2 to mm2', () => {
  expect(area(1).from('m2').to('mm2').value).toEqual(1000000)
})

test('ha to m2', () => {
  expect(area(1).from('ha').to('m2').value).toEqual(10000)
})

test('km2 to m2', () => {
  expect(area(1).from('km2').to('m2').value).toEqual(1000000)
})

// When converting between systems, expect < 0.1% error
test('m2 to ft2', () => {
  expect(percentError(10.7639, area(1).from('m2').to('ft2').value)).toBeLessThanOrEqual(ACCURACY)
})

test('mm2 to ft2', () => {
  expect(percentError(1.07639e-5, area(1).from('mm2').to('ft2').value)).toBeLessThanOrEqual(ACCURACY)
})
