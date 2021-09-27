import gulp from 'gulp';

// Pull in each task
import fonts from './tasks/fonts.js';
import images from './tasks/images.js';
// import esbuild from './tasks/esbuild.js';
import postCSS from './tasks/postcss.js';

const { parallel, watch } = gulp;

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.

const watcher = () => {
  watch('./src/images/**/*', { ignoreInitial: true }, images);
  watch(
    ['./src/css/*.css', './src/css/**/*.css'],
    { ignoreInitial: true },
    postCSS
  );
  // watch(
  //  ['./src/js/*.js', './src/js/**/*.js'],
  //  { ignoreInitial: true },
  //  esbuild
  // );
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
export default parallel(fonts, images, postCSS);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
export { watcher as watch };
