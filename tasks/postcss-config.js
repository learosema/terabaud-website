import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import postcssCustomProperties from 'postcss-custom-properties';

import path from 'path';
const currentWorkingDir = path.resolve();

export default {
  plugins: [
    postcssImport({ root: currentWorkingDir }),
    postcssCustomProperties({
      importFrom: path.join(currentWorkingDir, 'src/css/config/_vars.css'),
    }),
    autoprefixer(),
  ],
};
