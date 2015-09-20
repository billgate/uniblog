import gulp from 'gulp';
import karma from 'karma';
import path from 'path';
import paths from '../paths';
import gulpTape from 'gulp-tape';
import faucet from 'faucet';

/**
 * Test client front end js files (Unit tests)
 */

// Run once
gulp.task('client-test', function(done) {
  new karma.Server({
    configFile: path.join(__dirname, paths.karmaConf),
    singleRun: true
  }, done).start();
});

gulp.task('server-test', function(done) {
  return gulp.src(paths.serverTests)
    .pipe(gulpTape({
      reporter: faucet()
    }));
});

// Watch for file changes and re-run tests on each change
gulp.task('tdd', function (done) {
  new karma.Server({
    configFile: path.join(__dirname, paths.karmaConf)
  }, done).start();
});
