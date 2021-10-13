import gulp from 'gulp';
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';
const { dest, src } = gulp;

// Grabs all images, runs them through imagemin
// and plops them in the dist folder
const images = (cb) => {
  // We have specific configs for jpeg and png files to try
  // to really pull down asset sizes
  return src('./src/images/**/*')
    .pipe(
      imagemin(
        [
          mozjpeg({ quality: 60, progressive: true }),
          optipng({ optimizationLevel: 5, interlaced: null }),
        ],
        {
          silent: true,
        }
      )
    )
    .pipe(dest('./public/images'))
    .on('done', cb);
};

export default images;
