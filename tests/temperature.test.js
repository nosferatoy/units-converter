import { temperature } from '../src/index.js'

test('C to K', () => {
  expect(temperature(0).from('C').to('K').value).toEqual(273.15)
})

test('K to C', () => {
  expect(temperature(273.15).from('K').to('C').value).toEqual(0)
})

test('F to C', () => {
  expect(temperature(32).from('F').to('C').value).toEqual(0)
})

test('C to F', () => {
  expect(temperature(0).from('C').to('F').value).toEqual(32)
})

test('F to K', () => {
  expect(temperature(32).from('F').to('K').value).toEqual(273.15)
})

test('F to R', () => {
  expect(temperature(100).from('F').to('R').value).toEqual(559.6700000000001)
})

test('R to F', () => {
  expect(temperature(670).from('R').to('F').value).toEqual(210.32999999999998)
})

test('R to C', () => {
  expect(temperature(612).from('R').to('C').value).toEqual(66.85)
})

test('R to K', () => {
  expect(temperature(459.67).from('R').to('K').value).toEqual(255.3722222222222)
})
