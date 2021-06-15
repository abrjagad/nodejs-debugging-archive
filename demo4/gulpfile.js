// node-debug .\node_modules\gulp\bin\gulp.js debug

var gulp = require('gulp');
var nodeInspector = require('gulp-node-inspector');
var uglify = require('gulp-uglify');

gulp.task('debug', function() {
  debugger;
  gulp.src(['./**.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist'));

});
