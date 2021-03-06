'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('default', () => {
  return watch('src/**/*.js', function() {
    gulp.src('src/**/*.js')
      .pipe(plumber(function(error){
        console.log("Error transpiling", error.message)
        this.emit('end');
      }))
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('build'));
  });
});


