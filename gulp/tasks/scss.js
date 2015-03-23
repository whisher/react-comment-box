'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

module.exports = gulp.task('scss', function() {
    return sass(config.paths.src.mainStyles, { sourcemap: true })
      .on('error', function (err) {
          console.error('Error', err.message);
    })
  .pipe(sourcemaps.write())
  .pipe(rename(config.filenames.styles))
    .pipe(gulp.dest(config.paths.dest.build.styles));
});
