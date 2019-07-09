import { pressure } from '../src/index.js'

var ACCURACY = 0.000001

const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('Pa to Pa', () => {
    expect(pressure(1).from('Pa').to('Pa').value).toEqual(1)
  })

test('Pa to kPa', () => {
    expect(pressure(2000).from('Pa').to('kPa').value).toEqual(2)
  })

test('kPa to Pa', () => {
    expect(pressure(1).from('kPa').to('Pa').value).toEqual(1000)
  })

test('kPa to hPa', () => {
    expect(pressure(20).from('kPa').to('hPa').value).toEqual(200)
  })

test('kPa to MPa', () => {
    expect(pressure(8000).from('kPa').to('MPa').value).toEqual(8)
  })

test('kPa to bar', () => {
    expect(pressure(6000).from('kPa').to('bar').value).toEqual(60)
  })

test('psi to psi', () => {
    expect(pressure(10).from('psi').to('psi').value).toEqual(10)
  })

test('psi to ksi', () => {
    expect(pressure(10000).from('psi').to('ksi').value).toEqual(10)
  })

test('kPa to torr', () => {
    expect(percentError(3990.33, pressure(532).from('kPa').to('torr').value)).toBeLessThanOrEqual(ACCURACY)
  })

test('Pa to psi', () => {
    expect(percentError(1.450377, pressure(10000).from('Pa').to('psi').value)).toBeLessThanOrEqual(ACCURACY)
  })

test('torr to ksi', () => {
    expect(percentError(1, pressure(51714.931860168974).from('torr').to('ksi').value)).toBeLessThanOrEqual(ACCURACY)
  })

test('psi to hPa', () => {
    expect(percentError(689.47573, pressure(10).from('psi').to('hPa').value)).toBeLessThanOrEqual(ACCURACY)
  })