import path from 'path';
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import config from './postcss-config.js';

const { dest, src } = gulp;

const OUTPUT_INCLUDE_DIR = './src/_includes/css';
const OUTPUT_DIST_DIR = './public/css';
// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// An array of outputs that should be sent over to includes
const criticalStyles = ['critical.css'];

// Takes the arguments passed by `dest` and determines where the output file goes
const calculateOutput = ({ history }) => {
  // By default, we want a CSS file in our dist directory, so the
  // HTML can grab it with a <link />
  let response = OUTPUT_DIST_DIR;

  // Get everything after the last slash
  const sourceFileName = path.basename(history[0]);

  // If this is critical CSS though, we want it to go
  // to the _includes directory, so nunjucks can include it
  // directly in a <style>
  if (criticalStyles.includes(sourceFileName)) {
    response = OUTPUT_INCLUDE_DIR;
  }

  return response;
};

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
    .pipe(dest(calculateOutput));
};

export default postCSS;
