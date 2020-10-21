const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

function buildJs(mode = 'prod') {
  let src = gulp.src('./src/**/*.js');

  if (mode === 'dev') src = src.pipe(sourcemaps.init());

  src = src
    .pipe(babel({
      presets: ['@babel/preset-env'],
      comments: false
    }))
    .pipe(uglify({
      compress: true
    }))

  if (mode === 'dev') src = src.pipe(sourcemaps.write());

  return src.pipe(gulp.dest('./public'));
}

gulp.task('watchjs', () => {
  buildJs('dev');
  gulp.watch('./src/**/*.js', () => buildJs('dev'));
});

gulp.task('build-js-dev', () => buildJs('dev'));
gulp.task('build-js-prod', () => buildJs('prod'))