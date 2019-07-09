import { pace } from '../src/index.js'

var ACCURACY = 1 / 10000

const percentError = (expected, actual) => {
    return Math.abs((expected - actual) / actual)
}

test('s/m to s/m', () => {
    expect(pace(1).from('s/m').to('s/m').value).toEqual(1)
})

test('s/ft to s/ft', () => {
    expect(pace(1).from('s/ft').to('s/ft').value).toEqual(1)
})

test('min/mi to s/ft', () => {
    expect(pace(1).from('min/mi').to('s/ft').value).toEqual(0.0113636)
})

test('s/m to min/km', () => {
    expect(percentError(16.6667, pace(1).from('s/m').to('min/km').value)).toBeLessThanOrEqual(ACCURACY)
})

test('min/mi to min/km', () => {
    expect(percentError(0.621371, pace(1).from('min/mi').to('min/km').value)).toBeLessThanOrEqual(ACCURACY)
})

test('min/km to min/mi', () => {
    expect(percentError(1.60934, pace(1).from('min/km').to('min/mi').value)).toBeLessThanOrEqual(ACCURACY)
})

