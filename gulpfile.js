const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const purge = require('gulp-css-purge');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// browserSync
gulp.task('serve', ['minify-css', 'minify-html'], () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('resources/sass/*.scss', ['minify-css']);
  gulp.watch('resources/css/*.css').on('change', browserSync.reload);
  gulp.watch('resources/html/*.html', ['minify-html']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('resources/js/*.js', ['babel']);
  gulp.watch('resources/js/*.js').on('change', browserSync.reload);
});

// Minify html
gulp.task('minify-html', () => gulp.src('resources/html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('./')));

// SCSS to CSS with autoprefixer
gulp.task('sass', () => gulp.src(['resources/sass/freelancer.scss', 'resources/sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(purge())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('resources/css')));

// Minify CSS with autoprefixer
gulp.task('minify-css', ['sass'], () => gulp.src(['resources/css/*.css', '!resources/css/*.min.css'])
    .pipe(purge())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('resources/css')));

// Compile and minify JS
gulp.task('babel', () => gulp.src('resources/js/*.js')
        .pipe(babel({
          presets: ['es2015'],
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({
          suffix: '.min',
        }))
        .pipe(gulp.dest('resources/js')));
