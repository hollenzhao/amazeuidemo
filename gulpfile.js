const path = require('path');
const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');

const dirs = {
  style_entry_dir: './static_src/style/',
  style_output_dir: './static_dist/style/',
};

gulp.task('sass', function() {
  return gulp.src(path.join(dirs.style_entry_dir, '/**/*.scss'))
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(gulp.dest(dirs.style_output_dir));
});

gulp.task('watch', ['sass'], function() {
  var watcher = gulp.watch(path.join(dirs.style_entry_dir, '/**/*.scss'), ['sass']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});