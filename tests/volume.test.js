import { volume } from '../src/index.js'

const ACCURACY = 1 / 1000
const percentError = (expected, actual) => {
  return Math.abs((expected - actual) / actual)
}

test('l to l', () => {
  expect(volume(2).from('l').to('l')).toEqual(2)
})

test('mm3 to l', () => {
  expect(volume(1000000).from('mm3').to('l')).toEqual(1)
})

test('cm3 to l', () => {
  expect(volume(100).from('cm3').to('l')).toEqual(1 / 10)
})

test('dl to l', () => {
  expect(volume(2).from('dl').to('l')).toEqual(0.2)
})

test('cl to l', () => {
  expect(volume(25).from('cl').to('l')).toEqual(0.25)
})

test('ml to l', () => {
  expect(volume(100).from('ml').to('l')).toEqual(1 / 10)
})

test('m3 to l', () => {
  expect(volume(1).from('m3').to('l')).toEqual(1000)
})

test('km3 to l', () => {
  expect(volume(1).from('km3').to('l')).toEqual(1000000000000)
})

test('l to ml', () => {
  expect(volume(1).from('l').to('ml')).toEqual(1000)
})

test('dl to ml', () => {
  expect(volume(10).from('dl').to('ml')).toEqual(1000)
})

test('cl to ml', () => {
  expect(volume(100).from('cl').to('ml')).toEqual(1000)
})

test('ml to ml', () => {
  expect(volume(13).from('ml').to('ml')).toEqual(13)
})

test('msk to ml', () => {
  expect(volume(2).from('msk').to('ml')).toEqual(30)
})

test('tsk to ml', () => {
  expect(volume(3).from('tsk').to('ml')).toEqual(15)
})

test('krm to ml', () => {
  expect(volume(13).from('krm').to('ml')).toEqual(13)
})

test('kanna to l', () => {
  expect(volume(2).from('kanna').to('l')).toEqual(2 * 2.617)
})

test('kkp to ml', () => {
  expect(volume(2).from('kkp').to('ml')).toEqual(300)
})

test('glas to ml', () => {
  expect(volume(2).from('glas').to('ml')).toEqual(400)
})

test('ml to msk', () => {
  expect(volume(15).from('ml').to('msk')).toEqual(1)
})

test('ml to tsk', () => {
  expect(volume(5).from('ml').to('tsk')).toEqual(1)
})

test('ml to krm', () => {
  expect(volume(1).from('ml').to('krm')).toEqual(1)
})

test('l to kanna', () => {
  expect(volume(2.617).from('l').to('kanna')).toEqual(1)
})

test('ml to kkp', () => {
  expect(volume(150).from('ml').to('kkp')).toEqual(1)
})

test('ml to glas', () => {
  expect(volume(200).from('ml').to('glas')).toEqual(1)
})

test('fl-oz to fl-oz', () => {
  expect(volume(62).from('fl-oz').to('fl-oz')).toEqual(62)
})

test('fl-oz to Tbs', () => {
  expect(volume(4).from('fl-oz').to('Tbs')).toEqual(8)
})

test('Tbs to fl-oz', () => {
  expect(volume(2).from('Tbs').to('fl-oz')).toEqual(1)
})

test('Tbs to Tbs', () => {
  expect(volume(140).from('Tbs').to('Tbs')).toEqual(140)
})

// // When converting between systems, expect < 0.1% error
test('tsp to l', () => {
  expect(percentError(1.75, volume(355).from('tsp').to('l'))).toBeLessThanOrEqual(ACCURACY)
})

test('in3 to l', () => {
  expect(percentError(0.0163871, volume(1).from('in3').to('l'))).toBeLessThanOrEqual(ACCURACY)
})

test('in3 to fl-oz', () => {
  expect(percentError(0.554113, volume(1).from('in3').to('fl-oz'))).toBeLessThanOrEqual(ACCURACY)
})

test('m3 to yd3', () => {
  expect(percentError(1.30795, volume(1).from('m3').to('yd3'))).toBeLessThanOrEqual(ACCURACY)
})

test('ft3 to cm3', () => {
  expect(percentError(28316.8, volume(1).from('ft3').to('cm3'))).toBeLessThanOrEqual(ACCURACY)
})

test('pnt to ml', () => {
  expect(percentError(2366, volume(5).from('pnt').to('ml'))).toBeLessThanOrEqual(ACCURACY)
})

test('ml to gal', () => {
  expect(percentError(2.609, volume(9876).from('ml').to('gal'))).toBeLessThanOrEqual(ACCURACY)
})

test('gal to l', () => {
  expect(percentError(37.85, volume(10).from('gal').to('l'))).toBeLessThanOrEqual(ACCURACY)
})
