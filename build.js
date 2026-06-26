const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const watch = process.argv.includes('--watch');

if (!fs.existsSync('dist')) fs.mkdirSync('dist');

['index.html', 'manifest.json', 'sw.js'].forEach(f =>
  fs.copyFileSync(f, path.join('dist', f))
);
if (fs.existsSync('icons')) {
  fs.cpSync('icons', 'dist/icons', { recursive: true });
}

const buildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  minify: !watch,
  sourcemap: watch,
  outfile: 'dist/app.js',
};

if (watch) {
  esbuild.context(buildOptions).then(ctx => {
    ctx.watch();
    console.log('Watching for changes...');
  }).catch(() => process.exit(1));
} else {
  esbuild.build(buildOptions).then(() => {
    console.log('Build complete');
  }).catch(() => process.exit(1));
}
