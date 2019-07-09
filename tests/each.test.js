import { each } from '../src/index.js'

test('ea to ea', () => {
  expect(each(1).from('ea').to('ea').value).toEqual(1)
})

test('dz to ea', () => {
  expect(each(1).from('dz').to('ea').value).toEqual(12)
})

test('ea to dz', () => {
  expect(each(12).from('ea').to('dz').value).toEqual(1)
})