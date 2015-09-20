import gulp from 'gulp';
import paths from '../paths';
import eslint from 'gulp-eslint';

// runs eslint on all .js files
gulp.task('lint', function() {
  return gulp.src([paths.js, paths.clientTests, paths.serverTests, paths.e2eTests])
    .pipe(eslint())
    .pipe(eslint.format());
});
