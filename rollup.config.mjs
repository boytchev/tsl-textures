import { uglify } from 'rollup-plugin-uglify';

export default [

	{
		input: './src/tsl-textures.js',
		output: {
			file: './dist/tsl-textures.js',
			format: 'es',
			banner: '// TSL Textures\n',
		},
	},

	{
		input: './src/tsl-textures.js',
		output: {
			file: './dist/tsl-textures.min.js',
			format: 'es',
			banner: '// TSL Textures\n',
		},
		plugins: [
			uglify()
		]
	},

]
