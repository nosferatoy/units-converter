import utils from '../utils.js';

const volume = {
    metric: {
        baseUnit: 'l',
        transform: (val) => { return 33.8140226 * val },
        units: [
            {
                alias: 'mm3',
                name: {
                    singular: 'Cubic Millimeter'
                    , plural: 'Cubic Millimeters'
                }
                , to_anchor: 1 / 1000000
            },
            {
                alias: 'cm3',
                name: {
                    singular: 'Cubic Centimeter'
                    , plural: 'Cubic Centimeters'
                }
                , to_anchor: 1 / 1000
            },
            {
                alias: 'ml',
                name: {
                    singular: 'Millilitre'
                    , plural: 'Millilitres'
                }
                , to_anchor: 1 / 1000
            },
            {
                alias: 'cl',
                name: {
                    singular: 'Centilitre'
                    , plural: 'Centilitres'
                }
                , to_anchor: 1 / 100
            },
            {
                alias: 'dl',
                name: {
                    singular: 'Decilitre'
                    , plural: 'Decilitres'
                }
                , to_anchor: 1 / 10
            },
            {
                alias: 'l',
                name: {
                    singular: 'Litre'
                    , plural: 'Litres'
                }
                , to_anchor: 1
            },
            {
                alias: 'kl',
                name: {
                    singular: 'Kilolitre'
                    , plural: 'Kilolitres'
                }
                , to_anchor: 1000
            },
            {
                alias: 'm3',
                name: {
                    singular: 'Cubic meter'
                    , plural: 'Cubic meters'
                }
                , to_anchor: 1000
            },
            {
                alias: 'km3',
                name: {
                    singular: 'Cubic kilometer'
                    , plural: 'Cubic kilometers'
                }
                , to_anchor: 1000000000000
            },

            // Swedish units
            {
                alias: 'krm',
                name: {
                    singular: 'Matsked'
                    , plural: 'Matskedar'
                }
                , to_anchor: 1 / 1000
            },
            {
                alias: 'tsk',
                name: {
                    singular: 'Tesked'
                    , plural: 'Teskedar'
                }
                , to_anchor: 5 / 1000
            },
            {
                alias: 'msk',
                name: {
                    singular: 'Matsked'
                    , plural: 'Matskedar'
                }
                , to_anchor: 15 / 1000
            },
            {
                alias: 'kkp',
                name: {
                    singular: 'Kaffekopp'
                    , plural: 'Kaffekoppar'
                }
                , to_anchor: 150 / 1000
            },
            {
                alias: 'glas',
                name: {
                    singular: 'Glas'
                    , plural: 'Glas'
                }
                , to_anchor: 200 / 1000
            },
            {
                alias: 'kanna',
                name: {
                    singular: 'Kanna'
                    , plural: 'Kannor'
                }
                , to_anchor: 2.617
            }
        ]
    },

    imperial: {
        baseUnit: 'fl-oz',
        transform: (val) => { return val * 1 / 33.8140226 },
        units: [
            {
                alias: 'tsp',
                name: {
                    singular: 'Teaspoon'
                    , plural: 'Teaspoons'
                }
                , to_anchor: 1 / 6
            },
            {
                alias: 'Tbs',
                name: {
                    singular: 'Tablespoon'
                    , plural: 'Tablespoons'
                }
                , to_anchor: 1 / 2
            },
            {
                alias: 'in3',
                name: {
                    singular: 'Cubic inch'
                    , plural: 'Cubic inches'
                }
                , to_anchor: 0.55411
            },
            {
                alias: 'fl-oz',
                name: {
                    singular: 'Fluid Ounce'
                    , plural: 'Fluid Ounces'
                }
                , to_anchor: 1
            },
            {
                alias: 'cup',
                name: {
                    singular: 'Cup'
                    , plural: 'Cups'
                }
                , to_anchor: 8
            },
            {
                alias: 'pnt',
                name: {
                    singular: 'Pint'
                    , plural: 'Pints'
                }
                , to_anchor: 16
            },
            {
                alias: 'qt',
                name: {
                    singular: 'Quart'
                    , plural: 'Quarts'
                }
                , to_anchor: 32
            },
            {
                alias: 'gal',
                name: {
                    singular: 'Gallon'
                    , plural: 'Gallons'
                }
                , to_anchor: 128
            },
            {
                alias: 'ft3',
                name: {
                    singular: 'Cubic foot'
                    , plural: 'Cubic feet'
                }
                , to_anchor: 957.506
            },
            {
                alias: 'yd3',
                name: {
                    singular: 'Cubic yard'
                    , plural: 'Cubic yards'
                }
                , to_anchor: 25852.7
            }
        ]
    }
}

export default utils(volume);