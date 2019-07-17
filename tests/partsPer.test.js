import { partsPer } from '../src/index.js'

test('ppm to ppm', () => {
  expect(partsPer(1).from('ppm').to('ppm').value).toEqual(1)
})

test('ppb to ppb', () => {
  expect(partsPer(1).from('ppb').to('ppb').value).toEqual(1)
})

test('ppm to ppb', () => {
  expect(partsPer(1).from('ppm').to('ppb').value).toEqual(1000)
})

test('ppb to ppm', () => {
  expect(partsPer(1).from('ppb').to('ppm').value).toEqual(0.001)
})

test('ppt to ppt', () => {
  expect(partsPer(1).from('ppt').to('ppt').value).toEqual(1)
})

test('ppm to ppt', () => {
  expect(partsPer(1).from('ppm').to('ppt').value).toEqual(1000000)
})

test('ppt to ppb', () => {
  expect(partsPer(1).from('ppt').to('ppb').value).toEqual(0.001)
})

test('ppt to ppm', () => {
  expect(partsPer(1).from('ppt').to('ppm').value).toEqual(0.000001)
})

test('ppq to ppq', () => {
  expect(partsPer(1).from('ppq').to('ppq').value).toEqual(1)
})

test('ppq to ppt', () => {
  expect(partsPer(1).from('ppq').to('ppt').value).toEqual(0.001)
})

test('ppq to ppm', () => {
  expect(partsPer(1).from('ppq').to('ppm').value).toEqual(0.000000001)
})
