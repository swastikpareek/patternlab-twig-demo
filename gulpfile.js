var gulp         = require('gulp');
var config       = require('./build.config.json');
var shell        = require('gulp-shell');

gulp.task('serve', function() {
  browserSync({
    server: {
        baseDir: config.root
    },
    ghostMode: true,
    open: "external"
  });
});


gulp.task('pl:generate', function () {
  return gulp.src('', {read: false})
    .pipe(shell([
      'php core/console --generate'
    ]));

});


gulp.task('pl:serve', function () {
  return gulp.src('', {read: false})
    .pipe(shell([
      'php core/console --server'
    ]));
});



gulp.task('pl:watch', function () {
  gulp.watch('./source/**/**', ['pl:generate']);
});


