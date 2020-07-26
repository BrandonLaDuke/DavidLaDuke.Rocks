var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello Brandon');
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'localhost/DavidLaDuke.Rocks'
  })
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('css/**/*.css', browserSync.reload);
  gulp.watch('/*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
});
