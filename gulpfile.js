const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');

// browserSync
gulp.task('serve', ['minify-css'], () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('resources/sass/*.scss', ['minify-css']);
  gulp.watch('resources/css/*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});

// SCSS to CSS
gulp.task('sass', () => gulp.src('resources/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('resources/css')));

// Minify CSS
gulp.task('minify-css', ['sass'], () => gulp.src(['resources/css/*.css', '!resources/css/*.min.css'])
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('resources/css')));
