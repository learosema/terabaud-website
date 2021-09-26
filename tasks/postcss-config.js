import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import postcssCssVars from 'postcss-css-variables';

import path from 'path';
const __dirname = path.resolve();

export default {
  plugins: [
    postcssImport({ root: __dirname }),
    postcssCssVars(),
    autoprefixer(),
  ],
};
