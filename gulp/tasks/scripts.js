'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

function scripts() {
  var b = browserify({
    entries: [config.paths.src.entryPoint],
    transform: [reactify],
    debug: true,
    cache: {}, 
    packageCache: {}, 
    fullPaths: true
  });
  var watcher  = watchify(b);

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(config.filenames.app))
      .pipe(gulp.dest(config.paths.dest.build.js))
      
  })
    .bundle()
    .pipe(source(config.filenames.app))
    .pipe(gulp.dest(config.paths.dest.build.js));
}

module.exports = gulp.task('scripts',scripts);
