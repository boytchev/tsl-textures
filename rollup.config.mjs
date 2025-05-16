import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import fs from 'fs';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

export default [
	{
		input: './src/tsl-textures.js',
		output: {
			file: './dist/tsl-textures.js',
			format: 'es',
			banner: `// TSL Textures v${pkg.version}\n`,
		},
		external: ['three', 'three/tsl'],
	},
	{
		input: './src/tsl-textures.js',
		output: {
			file: './dist/tsl-textures.min.js',
			format: 'es',
			banner: `/*! TSL Textures v${pkg.version} */\n`,
		},
		external: ['three', 'three/tsl'],
		plugins: [
			terser({
				format: {
					comments: 'some'
				}
			})
		]
	},
	{
		input: './src/tsl-textures.js',
		output: {
			file: `dist/cjs/tsl-textures.js`,
			format: 'cjs',
			banner: `// TSL Textures v${pkg.version}\n`,
			sourcemap: false
		},
		external: ['three', 'three/tsl'],
		plugins: [
			resolve(),
			commonjs()
		]
	},
	{
		input: './src/tsl-textures.js',
		output: {
			file: `dist/cjs/tsl-textures.min.js`,
			format: 'cjs',
			banner: `/*! TSL Textures v${pkg.version} */\n`,
			sourcemap: false
		},
		external: ['three', 'three/tsl'],
		plugins: [
			resolve(),
			commonjs(),
			terser({
				format: {
					comments: 'some'
				}
			})
		]
	}
];
