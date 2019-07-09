import * as converter from '../src/index.js'

describe('Test to best', () => {
    test('best mm', () => {
        expect(converter.length(1200).from('mm').toBest()).toEqual({
            value: 1.2
            , unit: 'm'
            , singular: 'Meter'
            , plural: 'Meters'
        })
    })

    tests['excludes measurements'] = function () {
        var actual = convert(1200000).from('mm').toBest({ exclude: ['km', 'm'] })
            , expected = {
                val: 120000
                , unit: 'cm'
                , singular: 'Centimeter'
                , plural: 'Centimeters'
            };

        assert.deepEqual(actual, expected);
    }

    tests['does not break when excluding from measurement'] = function () {
        var actual = convert(10).from('km').toBest({ exclude: ['km'] })
            , expected = {
                val: 10000
                , unit: 'm'
                , singular: 'Meter'
                , plural: 'Meters'
            };

        assert.deepEqual(actual, expected);
    }

    tests['if all measurements are excluded return from'] = function () {
        var actual = convert(10).from('km').toBest({ exclude: ['mm, cm, m, km'] })
            , expected = {
                val: 10
                , unit: 'km'
                , singular: 'Kilometer'
                , plural: 'Kilometers'
            };

        assert.deepEqual(actual, expected);
    }

    tests['pre-cut off number'] = function () {
        var actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 })
            , expected = {
                val: 900
                , unit: 'cm'
                , singular: 'Centimeter'
                , plural: 'Centimeters'
            };

        assert.deepEqual(actual, expected);
    }

    tests['post-cut off number'] = function () {
        var actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 })
            , expected = {
                val: 10
                , unit: 'm'
                , singular: 'Meter'
                , plural: 'Meters'
            };

        assert.deepEqual(actual, expected);
    }
})

test('Test to describe', () => {

    tests['get kg'] = function () {
        var actual = convert().describe('kg')
            , expected = {
                abbr: 'kg'
                , measure: 'mass'
                , system: 'metric'
                , singular: 'Kilogram'
                , plural: 'Kilograms'
            };

        assert.deepEqual(actual, expected);
    };

    tests['get ac'] = function () {
        var actual = convert().describe('ac')
            , expected = {
                abbr: 'ac'
                , measure: 'area'
                , system: 'imperial'
                , singular: 'Acre'
                , plural: 'Acres'
            };

        assert.deepEqual(actual, expected);
    };

})

test('Test the error handling', () => {

    tests['ltr to kg throws'] = function () {
        assert.throws(function () {
            convert(2).from('ltr').to('kg');
        });
    };

    tests['fl-oz to oz throws'] = function () {
        assert.throws(function () {
            convert(4).from('fl-oz').to('oz');
        });
    };

    tests['kg to fl-oz throws'] = function () {
        assert.throws(function () {
            convert(4).from('kg').to('fl-oz');
        });
    };

    tests['kg to ft throws'] = function () {
        assert.throws(function () {
            convert(4).from('kg').to('fl-oz');
        });
    };

    tests['kg to nonexistant unit throws'] = function () {
        assert.throws(function () {
            convert(4).from('kg').to('garbage');
        });
    };

    tests['nonexistant unit to kg throws'] = function () {
        assert.throws(function () {
            convert(4).from('nonexistant unit');
        });
    };

    tests['.to before .from throws'] = function () {
        assert.throws(function () {
            convert(4).to('kg').from('fl-oz');
        });
    };
})

test('Test the list', () => {


    tests['list'] = function () {
        var list = convert().list()
            , firstItem = list[0];

        assert(list.length > 0);
        assert(firstItem.hasOwnProperty("abbr"));
        assert(typeof firstItem.abbr === "string");
        assert(firstItem.hasOwnProperty("measure"));
        assert(typeof firstItem.measure === "string");
        assert(firstItem.hasOwnProperty("system"));
        assert(typeof firstItem.system === "string");
        assert(firstItem.hasOwnProperty("singular"));
        assert(typeof firstItem.singular === "string");
        assert(firstItem.hasOwnProperty("plural"));
        assert(typeof firstItem.plural === "string");
    };

    tests['list by measure'] = function () {
        var full = convert().list()
            , measures = convert().measures();

        measures.map(function (measure) {
            var list = convert().list(measure);

            assert(list.length > 0);
            assert(list.length < full.length);
        });
    };

})

test('Test the possibilities', () => {


    tests['l possibilities'] = function () {
        var actual = convert().from('l').possibilities()
            , expected = ['mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['kg possibilities'] = function () {
        var actual = convert().from('kg').possibilities()
            , expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['m possibilities'] = function () {
        var actual = convert().from('m').possibilities()
            , expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['each possibilities'] = function () {
        var actual = convert().possibilities('each')
            , expected = ['ea', 'dz'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['mass possibilities'] = function () {
        var actual = convert().possibilities('mass')
            , expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['volume possibilities'] = function () {
        var actual = convert().possibilities('volume')
            , expected = ['mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['volume flow rate possibilities'] = function () {
        var actual = convert().possibilities('volumeFlowRate')
            , expected = ['mm3/s', 'cm3/s', 'ml/s', 'cl/s', 'dl/s', 'l/s', 'l/min', 'l/h', 'kl/s', 'kl/min', 'kl/h', 'm3/s', 'm3/min', 'm3/h', 'km3/s', 'tsp/s', 'Tbs/s', 'in3/s', 'in3/min', 'in3/h', 'fl-oz/s', 'fl-oz/min', 'fl-oz/h', 'cup/s', 'pnt/s', 'pnt/min', 'pnt/h', 'qt/s', 'gal/s', 'gal/min', 'gal/h', 'ft3/s', 'ft3/min', 'ft3/h', 'yd3/s', 'yd3/min', 'yd3/h'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['length possibilities'] = function () {
        var actual = convert().possibilities('length')
            , expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['temperature possibilities'] = function () {
        var actual = convert().possibilities('temperature')
            , expected = ['C', 'K', 'F', 'R'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['time possibilities'] = function () {
        var actual = convert().possibilities('time')
            , expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['digital possibilities'] = function () {
        var actual = convert().possibilities('digital')
            , expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['partsPer possibilities'] = function () {
        var actual = convert().possibilities('partsPer')
            , expected = ['ppm', 'ppb', 'ppt', 'ppq'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['pressure possibilities'] = function () {
        var actual = convert().possibilities('pressure')
            , expected = ['Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['speed possibilities'] = function () {
        var actual = convert().possibilities('speed')
            , expected = ['m/s', 'km/h', 'm/h', 'knot', 'ft/s'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['pace possibilities'] = function () {
        var actual = convert().possibilities('pace')
            , expected = ['s/m', 'min/km', 'min/mi', 's/ft'];
        assert.deepEqual(actual.sort(), expected.sort())
    };

    tests['current possibilities'] = function () {
        var actual = convert().possibilities('current')
            , expected = ['A', 'mA', 'kA'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['voltage possibilities'] = function () {
        var actual = convert().possibilities('voltage')
            , expected = ['V', 'mV', 'kV'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['power possibilities'] = function () {
        var actual = convert().possibilities('power')
            , expected = ['W', 'mW', 'kW', 'MW', 'GW'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['reactive power possibilities'] = function () {
        var actual = convert().possibilities('reactivePower')
            , expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['apparent power possibilities'] = function () {
        var actual = convert().possibilities('apparentPower')
            , expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['energy possibilities'] = function () {
        var actual = convert().possibilities('energy')
            , expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['reactive energy possibilities'] = function () {
        var actual = convert().possibilities('reactiveEnergy')
            , expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['reactive energy possibilities'] = function () {
        var actual = convert().possibilities('frequency')
            , expected = ['Hz', 'mHz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['illuminance possibilities'] = function () {
        var actual = convert().possibilities('illuminance')
            , expected = ['lx', 'ft-cd'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['angle possibilities'] = function () {
        var actual = convert().possibilities('angle')
            , expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['charge possibilities'] = function () {
        var actual = convert().possibilities('charge')
            , expected = ['c', 'mC', 'μC', 'nC', 'pC'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['force possibilities'] = function () {
        var actual = convert().possibilities('force')
            , expected = ['N', 'kN', 'lbf'];
        assert.deepEqual(actual.sort(), expected.sort());
    };

    tests['acceleration possibilities'] = function () {
        var actual = convert().possibilities('acceleration')
            , expected = ['g-force', 'm/s2'];
        assert.deepEqual(actual.sort(), expected.sort());
    };


});