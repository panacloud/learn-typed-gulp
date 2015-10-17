/// <reference path="typings/tsd.d.ts" />
 
var gulp = require('gulp'),
    concat = require('gulp-concat');
 
gulp.task('default', function(){
  return gulp.src(["scripts/*.js"])
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist"));
});