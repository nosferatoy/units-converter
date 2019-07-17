import { current } from '../src/index.js'

test('A to A', () => {
  expect(current(1).from('A').to('A').value).toEqual(1)
})

test('mA to mA', () => {
  expect(current(1).from('mA').to('mA').value).toEqual(1)
})

test('kA to kA', () => {
  expect(current(1).from('kA').to('kA').value).toEqual(1)
})

test('A to mA', () => {
  expect(current(1).from('A').to('mA').value).toEqual(1000)
})

test('A to kA', () => {
  expect(current(1).from('A').to('kA').value).toEqual(0.001)
})

test('kA to mA', () => {
  expect(current(1).from('kA').to('mA').value).toEqual(1000000)
})

test('mA to kA', () => {
  expect(current(1).from('mA').to('kA').value).toEqual(0.000001)
})

test('mA to A', () => {
  expect(current(1).from('mA').to('A').value).toEqual(0.001)
})

test('kA to A', () => {
  expect(current(1).from('kA').to('A').value).toEqual(1000)
})
