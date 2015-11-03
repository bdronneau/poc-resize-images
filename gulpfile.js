// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');

// Task for launch server on dev files
gulp.task('serverDev', function () {
  connect.server({
    root: './',
    port: 8005,
    livereload : true
  });
});

// Watch modification on html
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

// Watch modification on CSS
gulp.task('style', function () {
  gulp.src('./css/**/*.css')
    .pipe(connect.reload());
});

// Watch modification on JS
gulp.task('js', function () {
  gulp.src('./js/**/*.js')
    .pipe(connect.reload());
});


// Main watch for dev files
gulp.task('watchDev', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./css/**/*.css'],  ['style']);
  gulp.watch(['./js/**/*.js'],   ['js']);
});

// task for launch Dev environnement
gulp.task('launchDev',
  ['serverDev', 'watchDev']
);
