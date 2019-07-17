import { illuminance } from '../src/index.js'

test('ft-cd to lx', () => {
  expect(illuminance(1).from('ft-cd').to('lx').value).toEqual(10.76391)
})

test('lx to ft-cd', () => {
  expect(illuminance(1).from('lx').to('ft-cd').value).toEqual(0.09290304359661128)
})
