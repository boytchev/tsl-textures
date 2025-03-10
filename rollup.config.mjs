import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import fs from 'fs';
import path from 'path';

// Function to generate Rollup configuration for each file in the src directory
function generateConfig() {
  const srcDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src');
  const files = fs.readdirSync(srcDir);

  return files.flatMap(file => {
    const inputFilePath = path.join(srcDir, file);
    const baseName = path.basename(file, path.extname(file));

    return [
      {
        input: inputFilePath,
        output: {
          file: `dist/esm/${baseName}.js`,
          format: 'esm',
          sourcemap: false
        },
        external: ['three', 'three/tsl'],
        plugins: [
          resolve(),
          commonjs(),
          terser()
        ]
      },
      {
        input: inputFilePath,
        output: {
          file: `dist/cjs/${baseName}.js`,
          format: 'cjs',
          sourcemap: false
        },
        external: ['three', 'three/tsl'],
        plugins: [
          resolve(),
          commonjs(),
          terser()
        ]
      }
    ];
  });
}

export default generateConfig();