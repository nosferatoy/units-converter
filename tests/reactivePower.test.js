import { reactivePower } from '../src/index.js'

test('VAR to VAR', () => {
  expect(reactivePower(1).from('VAR').to('VAR').value).toEqual(1)
})

test('mVAR to mVAR', () => {
  expect(reactivePower(1).from('mVAR').to('mVAR').value).toEqual(1)
})

test('kVAR to kVAR', () => {
  expect(reactivePower(1).from('kVAR').to('kVAR').value).toEqual(1)
})

test('MVAR to MVAR', () => {
  expect(reactivePower(1).from('MVAR').to('MVAR').value).toEqual(1)
})

test('GVAR to GVAR', () => {
  expect(reactivePower(1).from('GVAR').to('GVAR').value).toEqual(1)
})

test('VAR to mVAR', () => {
  expect(reactivePower(1).from('VAR').to('mVAR').value).toEqual(1000)
})

test('VAR to kVAR', () => {
  expect(reactivePower(1).from('VAR').to('kVAR').value).toEqual(0.001)
})

test('VAR to MVAR', () => {
  expect(reactivePower(1).from('VAR').to('MVAR').value).toEqual(0.000001)
})

test('VAR to GVAR', () => {
  expect(reactivePower(1).from('VAR').to('GVAR').value).toEqual(0.000000001)
})

test('GVAR to mVAR', () => {
  expect(reactivePower(1).from('GVAR').to('mVAR').value).toEqual(1000000000000)
})

test('MVAR to mVAR', () => {
  expect(reactivePower(1).from('MVAR').to('mVAR').value).toEqual(1000000000)
})

test('kVAR to mVAR', () => {
  expect(reactivePower(1).from('kVAR').to('mVAR').value).toEqual(1000000)
})

test('mVAR to kVAR', () => {
  expect(reactivePower(1).from('mVAR').to('kVAR').value).toEqual(0.000001)
})

test('mVAR to VAR', () => {
  expect(reactivePower(1).from('mVAR').to('VAR').value).toEqual(0.001)
})

test('kVAR to VAR', () => {
  expect(reactivePower(1).from('kVAR').to('VAR').value).toEqual(1000)
})
