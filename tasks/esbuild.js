import gulp from 'gulp';
import gulpEsbuild from 'gulp-esbuild';

const { src, dest } = gulp;
const INPUT_FILE = 'src/js/index.js';

function build() {
  return src(INPUT_FILE)
    .pipe(
      gulpEsbuild({
        outfile: 'bundle.js',
        bundle: true,
      })
    )
    .pipe(dest('./public'));
}

export default build;
