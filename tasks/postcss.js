import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import config from './postcss-config.js';

const { dest, src } = gulp;

const OUTPUT_DIR = './src/_includes/css';
// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// The main postCSS method grabs all root postcss files,
// processes them, then sends them to the output calculator
const postCSS = () => {
  return src('./src/css/*.css')
    .pipe(postcss(config.plugins))
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2,
            }
          : {}
      )
    )
    .pipe(dest(OUTPUT_DIR));
};

export default postCSS;
