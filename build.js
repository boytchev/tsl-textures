const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['npm-test/main.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'npm-test/dist/bundle.js',
}).catch(() => process.exit(1));