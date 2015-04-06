var gulp = require('gulp');

module.exports = gulp.task('watch', function() {
  gulp.watch(config.watch.src, config.watch.tasks);
});
