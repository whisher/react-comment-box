'use strict';

var gulp = require('gulp');

module.exports = gulp.task('fonts', function () {
  return gulp.src(config.paths.src.fonts)
    .pipe(gulp.dest(config.paths.dest.build.fonts));
});
