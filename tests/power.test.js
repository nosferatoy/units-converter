import { power } from '../src/index.js'

test('W to W', () => {
    expect(power(1).from('W').to('W').value).toEqual(1)
})

test('mW to mW', () => {
    expect(power(1).from('mW').to('mW').value).toEqual(1)
})

test('kW to kW', () => {
    expect(power(1).from('kW').to('kW').value).toEqual(1)
})

test('MW to MW', () => {
    expect(power(1).from('MW').to('MW').value).toEqual(1)
})

test('GW to GW', () => {
    expect(power(1).from('GW').to('GW').value).toEqual(1)
})

test('W to mW', () => {
    expect(power(1).from('W').to('mW').value).toEqual(1000)
})

test('W to kW', () => {
    expect(power(1).from('W').to('kW').value).toEqual(0.001)
})

test('W to MW', () => {
    expect(power(1).from('W').to('MW').value).toEqual(0.000001)
})

test('W to GW', () => {
    expect(power(1).from('W').to('GW').value).toEqual(0.000000001)
})

test('GW to mW', () => {
    expect(power(1).from('GW').to('mW').value).toEqual(1000000000000)
})

test('MW to mW', () => {
    expect(power(1).from('MW').to('mW').value).toEqual(1000000000)
})

test('kW to mW', () => {
    expect(power(1).from('kW').to('mW').value).toEqual(1000000)
})

test('mW to kW', () => {
    expect(power(1).from('mW').to('kW').value).toEqual(0.000001)
})

test('mW to W', () => {
    expect(power(1).from('mW').to('W').value).toEqual(0.001)
})

test('kW to W', () => {
    expect(power(1).from('kW').to('W').value).toEqual(1000)
})
