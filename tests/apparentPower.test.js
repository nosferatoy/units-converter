import { apparentPower } from '../src/index.js'

test('VA to VA', () => {
  expect(apparentPower(1).from('VA').to('VA').value).toEqual(1)
})

test('mVA to mVA', () => {
  expect(apparentPower(1).from('mVA').to('mVA').value).toEqual(1)
})

test('kVA to kVA', () => {
  expect(apparentPower(1).from('kVA').to('kVA').value).toEqual(1)
})

test('MVA to MVA', () => {
  expect(apparentPower(1).from('MVA').to('MVA').value).toEqual(1)
})

test('GVA to GVA', () => {
  expect(apparentPower(1).from('GVA').to('GVA').value).toEqual(1)
})

test('VA to mVA', () => {
  expect(apparentPower(1).from('VA').to('mVA').value).toEqual(1000)
})

test('VA to kVA', () => {
  expect(apparentPower(1).from('VA').to('kVA').value).toEqual(0.001)
})

test('VA to MVA', () => {
  expect(apparentPower(1).from('VA').to('MVA').value).toEqual(0.000001)
})

test('VA to GVA', () => {
  expect(apparentPower(1).from('VA').to('GVA').value).toEqual(0.000000001)
})

test('GVA to mVA', () => {
  expect(apparentPower(1).from('GVA').to('mVA').value).toEqual(1000000000000)
})

test('MVA to mVA', () => {
  expect(apparentPower(1).from('MVA').to('mVA').value).toEqual(1000000000)
})

test('kVA to mVA', () => {
  expect(apparentPower(1).from('kVA').to('mVA').value).toEqual(1000000)
})

test('mVA to kVA', () => {
  expect(apparentPower(1).from('mVA').to('kVA').value).toEqual(0.000001)
})

test('mVA to VA', () => {
  expect(apparentPower(1).from('mVA').to('VA').value).toEqual(0.001)
})

test('kVA to VA', () => {
  expect(apparentPower(1).from('kVA').to('VA').value).toEqual(1000)
})