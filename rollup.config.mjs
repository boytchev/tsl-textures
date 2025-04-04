import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };

export default [
	{
		input: './src/tsl-textures.js',
		output: {
			file: './dist/tsl-textures.js',
			format: 'es',
			banner: `// TSL Textures v${pkg.version}\n`,
		},
	},
	{
		input: './src/tsl-textures.js',
		output: {
			file: './dist/tsl-textures.min.js',
			format: 'es',
			banner: `/*! TSL Textures v${pkg.version} */\n`,
		},
		plugins: [
			terser({
				format: {
					comments: 'some'
				}
			})
		]
	}
];
