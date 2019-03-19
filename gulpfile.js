const { watch, src, dest, parallel,series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function scss() {
  return src("./scss/main.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(dest("./css"));
}

function liveReload() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

function reload(done) {
  browserSync.reload();
  done();
}

// exports.default = sass

watch("*", series(scss, reload));
exports.default = parallel(scss, liveReload);

