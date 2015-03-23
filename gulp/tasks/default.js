'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function() {
    runSequence(
                'clean',
                ['index',  'fonts', 'assets'],
                ['scss'],
                ['scripts']
       );
    });


