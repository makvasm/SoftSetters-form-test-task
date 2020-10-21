const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

function buildJs() {
  return gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())

    .pipe(babel({
      presets: ['@babel/preset-env'],
      comments: false
    }))
    .pipe(uglify({
      compress: true
    }))

    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'));
}

gulp.task('watchjs', () => {
  buildJs();
  gulp.watch('./src/**/*.js', buildJs);
});

gulp.task('buildjs', buildJs);