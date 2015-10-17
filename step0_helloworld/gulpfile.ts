/// <reference path="typings/tsd.d.ts" />
 
import gulp = require('gulp');
import concat = require('gulp-concat');
 
gulp.task('default', function(){
  return gulp.src(["scripts/*.js"])
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist"));
});

