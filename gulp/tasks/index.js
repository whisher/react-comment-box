'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace');

module.exports = gulp.task('index', function () {
 	return gulp.src(config.paths.src.index)
  		.pipe(
      			replace('<!--styles-->', '<link rel="stylesheet" href="css/' + config.filenames.styles + '">')
    		)
    		.pipe(
      			replace('<!--scripts-->', '<script src="js/' + config.filenames.app + '"></script>')
    		)
    		.pipe(gulp.dest(config.paths.dest.build.index));
});
