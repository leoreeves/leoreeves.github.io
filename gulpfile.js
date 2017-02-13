const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// browserSync
gulp.task('serve', ['minify-css'], () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('resources/sass/*.scss', ['minify-css']);
  gulp.watch('resources/css/*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('resources/**/*.js').on('change', browserSync.reload);
});

// SCSS to CSS with autoprefixer
gulp.task('sass', () => gulp.src('resources/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('resources/css')));

// Minify CSS with autoprefixer
gulp.task('minify-css', ['sass'], () => gulp.src(['resources/css/*.css', '!resources/css/*.min.css'])
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('resources/css')));
