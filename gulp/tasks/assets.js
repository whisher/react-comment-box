'use strict';

var gulp = require('gulp');

module.exports = gulp.task('assets', function () {
  return gulp.src(config.paths.src.assets)
    .pipe(gulp.dest(config.paths.dest.build.index));
});
