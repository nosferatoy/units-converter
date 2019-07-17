import { acceleration } from '../src/index.js'

test('g-force to m/s2', () => {
  expect(acceleration(1).from('g-force').to('m/s2').value).toEqual(9.80665)
})

test('m/s2 to g-force', () => {
  expect(acceleration(9.80665).from('m/s2').to('g-force').value).toEqual(1)
})
