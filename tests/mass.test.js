import { mass } from '../src/index.js'

const ACCURACY = 1 / 1000
const percentError = (expected, actual) => {
    return Math.abs((expected - actual) / actual)
}

test('lb to lb', () => {
    expect(mass(1).from('lb').to('lb').value).toEqual(1)
})

test('lb to oz', () => {
    expect(mass(1).from('lb').to('oz').value).toEqual(16)
})

test('oz to lb', () => {
    expect(mass(1).from('oz').to('lb').value).toEqual(1/16)
})

test('oz to oz', () => {
    expect(mass(6).from('oz').to('oz').value).toEqual(6)
})

test('kg to kg', () => {
    expect(mass(1).from('kg').to('kg').value).toEqual(1)
})

test('kg to g', () => {
    expect(mass(1).from('kg').to('g').value).toEqual(1000)
})

test('g to kg', () => {
    expect(mass(1).from('g').to('kg').value).toEqual(1/1000)
})

test('g to g', () => {
    expect(mass(100).from('g').to('g').value).toEqual(100)
})

// When converting between systems, expect < 0.1% error
test('lb to kg', () => {
    expect(percentError(0.453592, mass(1).from('lb').to('kg').value)).toBeLessThanOrEqual(ACCURACY)
})

test('g to lb', () => {
    expect(percentError(0.00220462, mass(1).from('g').to('lb').value)).toBeLessThanOrEqual(ACCURACY)
})

test('lb to g', () => {
    expect(percentError(1360.78, mass(3).from('lb').to('g').value)).toBeLessThanOrEqual(ACCURACY)
})

test('g to lb', () => {
    expect(percentError(3, mass(1360.78).from('g').to('lb').value)).toBeLessThanOrEqual(ACCURACY)
})