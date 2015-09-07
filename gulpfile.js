// require gulp
var gulp = require('gulp');

// require other packages
var serve = require('gulp-serve');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var prefix = require("gulp-autoprefixer");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// static server & watching sass/html files
gulp.task('serve', ['sass', 'scripts'], function() {

  browserSync.init({
    server: './dist'
  });

  gulp.watch(['assets/sass/0-tools/*.scss','assets/sass/1-base/*.sass','assets/sass/2-modules/*.sass','assets/sass/*.scss'], ['sass']);
  gulp.watch('./assets/js/*.js', ['scripts']);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

//compile sass please
gulp.task('sass', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe(sass({
      onError: browserSync.notify
    }))
    .pipe(prefix({
      browser: ['last 15 versions', '> 1%', 'ie 8', 'ie7'],
      cascade: true
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// scripts task
gulp.task('scripts', function() {
  return gulp.src('./assets/js/*.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dist/js/'))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./dist/js/'))
});

gulp.task('default', ['serve']);



// // default task
// gulp.task('default', function() {
//   gulp.task('default', ['scripts', 'styles', 'watch'])
// });
//
//
// // Static Server + watching scss/html files
// gulp.task('serve', ['styles', 'scripts'], function() {
//
//     browserSync.init({
//         server: "./dist"
//     });
//
//     gulp.watch('./assets/sass/*.scss', ['styles']);
//     gulp.watch('./assets/js/*.js', ['scripts']);
//     gulp.watch('./dist/*.html').on('change', browserSync.reload);
// });
//
//
// // scripts task
// gulp.task('scripts', function() {
//   return gulp.src('./assets/js/*.js')
//   .pipe(concat('app.js'))
//   .pipe(gulp.dest('./dist/js/'))
//   .pipe(uglify())
//   .pipe(rename({
//     suffix: '.min'
//   }))
//   .pipe(gulp.dest('./dist/js/'))
// });
//
// // style task
// gulp.task('styles', function() {
//   return gulp.src('./assets/sass/*.scss')
//   .pipe(sass())
//   .pipe(gulp.dest('./dist/css/'))
//   .pipe(cssmin())
//   .pipe(rename({
//     suffix: '.min'
//   }))
//   .pipe(gulp.dest('./dist/css/'))
//   .pipe(browserSync.stream())
// });
//
// // watch task
// gulp.task('watch', function() {
//   gulp.watch('./assets/js/*.js', ['scripts']);
//   gulp.watch('./assets/sass/*.scss', ['styles']);
// })
