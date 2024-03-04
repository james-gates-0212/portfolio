const gulp = require('gulp');
const rename = require('gulp-rename');

gulp
  .src('./build/static/js/*.gz')
  .pipe(
    rename({
      extname: '',
    }),
  )
  .pipe(gulp.dest('./build/static/js'));

gulp
  .src('./build/static/css/*.gz')
  .pipe(
    rename({
      extname: '',
    }),
  )
  .pipe(gulp.dest('./build/static/css'));

gulp
  .src('./build/static/media/*.gz')
  .pipe(
    rename({
      extname: '',
    }),
  )
  .pipe(gulp.dest('./build/static/media'));

gulp
  .src('./build/*.gz')
  .pipe(
    rename({
      extname: '',
    }),
  )
  .pipe(gulp.dest('./build'));
