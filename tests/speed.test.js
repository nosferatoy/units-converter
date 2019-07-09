import { speed } from '../src/index.js'

var ACCURACY = 0.0001

const percentError = (expected, actual) => {
    return Math.abs((expected - actual) / actual)
}

test('m/s to m/s', () => {
    expect(speed(1).from('m/s').to('m/s').value).toEqual(1)
})

test('m/s to km/h', () => {
    expect(speed(1).from('m/s').to('km/h').value).toEqual(3.6)
})

test('m/h to m/h', () => {
    expect(speed(6).from('m/h').to('m/h').value).toEqual(6)
})

test('m/h to knot', () => {
    expect(percentError(1.73795, speed(2).from('m/h').to('knot').value)).toBeLessThanOrEqual(ACCURACY)
})

test('m/h to ft/s', () => {
    expect(percentError(4.4, speed(3).from('m/h').to('ft/s').value)).toBeLessThanOrEqual(ACCURACY)
})

test('m/s to m/h', () => {
    expect(percentError(22.3694, speed(10).from('m/s').to('m/h').value)).toBeLessThanOrEqual(ACCURACY)
})

test('m/s to knot', () => {
    expect(percentError(15.5508, speed(8).from('m/s').to('knot').value)).toBeLessThanOrEqual(ACCURACY)
})

test('m/h to km/h', () => {
    expect(percentError(19.3121, speed(12).from('m/h').to('km/h').value)).toBeLessThanOrEqual(ACCURACY)
})