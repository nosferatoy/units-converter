import { reactiveEnergy } from '../src/index.js'

test('VARh to VARh', () => {
    expect(reactiveEnergy(1).from('VARh').to('VARh').value).toEqual(1)
})

test('mVARh to mVARh', () => {
    expect(reactiveEnergy(1).from('mVARh').to('mVARh').value).toEqual(1)
})

test('kVARh to kVARh', () => {
    expect(reactiveEnergy(1).from('kVARh').to('kVARh').value).toEqual(1)
})

test('MVARh to MVARh', () => {
    expect(reactiveEnergy(1).from('MVARh').to('MVARh').value).toEqual(1)
})

test('GVARh to GVARh', () => {
    expect(reactiveEnergy(1).from('GVARh').to('GVARh').value).toEqual(1)
})

test('VARh to mVARh', () => {
    expect(reactiveEnergy(1).from('VARh').to('mVARh').value).toEqual(1000)
})

test('VARh to kVARh', () => {
    expect(reactiveEnergy(1).from('VARh').to('kVARh').value).toEqual(0.001)
})

test('VARh to MVARh', () => {
    expect(reactiveEnergy(1).from('VARh').to('MVARh').value).toEqual(0.000001)
})

test('VARh to GVARh', () => {
    expect(reactiveEnergy(1).from('VARh').to('GVARh').value).toEqual(0.000000001)
})

test('GVARh to mVARh', () => {
    expect(reactiveEnergy(1).from('GVARh').to('mVARh').value).toEqual(1000000000000)
})

test('MVARh to mVARh', () => {
    expect(reactiveEnergy(1).from('MVARh').to('mVARh').value).toEqual(1000000000)
})

test('kVARh to mVARh', () => {
    expect(reactiveEnergy(1).from('kVARh').to('mVARh').value).toEqual(1000000)
})

test('mVARh to kVARh', () => {
    expect(reactiveEnergy(1).from('mVARh').to('kVARh').value).toEqual(0.000001)
})

test('mVARh to VARh', () => {
    expect(reactiveEnergy(1).from('mVARh').to('VARh').value).toEqual(0.001)
})

test('kVARh to VARh', () => {
    expect(reactiveEnergy(1).from('kVARh').to('VARh').value).toEqual(1000)
})