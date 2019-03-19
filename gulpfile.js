const { watch, src, dest, parallel,series } = require('gulp');
const sass = require('gulp-sass');

function scss() {
  return src("./scss/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(dest("./css"));
}


// exports.default = sass


watch('./scss/style.scss', scss)
exports.default = scss
