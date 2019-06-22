import pkg from './package.json';
import path from "path";

const digital = path.resolve(__dirname, 'src/units/digital.js')
const volume = path.resolve(__dirname, 'src/units/volume.js')
const utils = path.resolve(__dirname, 'src/utils.js')


export default [
	{
		input: 'src/units/digital.js',
		output: [
			{ name: 'digital', file: 'dist/units/digital.js', format: 'es' },
			// { name: 'digital', file: 'dist/units/digital.cjs.js', format: 'cjs' },
		],
		external: [utils]
	},
	{
		input: 'src/units/volume.js',
		output: [
			{ name: 'volume', file: 'dist/units/volume.js', format: 'es' },
			// { name: 'volume', file: 'dist/units/volume.cjs.js', format: 'cjs' },
		],
		external: [utils]
	},
	{
		input: 'src/utils.js',
		output: [
			{ name: 'utils', file: 'dist/utils.js', format: 'es' },
			// { name: 'utils', file: 'dist/utils.cjs.js', format: 'cjs' },
		],
	},
	{
		input: 'src/index.js',
		output: [
			// { file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		external: [digital, volume]
	}]