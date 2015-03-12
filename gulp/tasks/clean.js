'use strict';

var gulp = require('gulp');
var del = require('del');

function clean(cb) {
    del(release ?  RELEASE_FOLDER : BUILD_FOLDER, cb);
}
module.exports = gulp.task('clean', clean);
