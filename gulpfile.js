//REQUIREMENTS

//Utilities
var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var filesize = require('gulp-filesize');

//Scripting
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//Styling
var less = require('gulp-less');
var sourceMap = require('gulp-sourcemaps');
var lesswatch = require('gulp-watch-less');

//Dev Tools
var browserSync = require('browser-sync').create();
var es = require('event-stream');

//On Error
var onError = function (err) {
  gutil.beep();
  console.log(err.toString());
  this.emit('end');
};



//TASKS

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  browserSync.reload();
});


//Compile all less files into main less file and output minified css
gulp.task('less', function() {
  return gulp.src([
    'assets/vendor/bootstrap-3.3.6/less/bootstrap.less',

    //ADD VENDOR STYLESHEETS HERE
    'assets/vendor/font-awesome-4.6.3/less/font-awesome.less',

    //MAIN GLOBAL STYLESHEET
    'assets/less/theme.less'
  ])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourceMap.init())
    .pipe(less({ compress: true }))
    .pipe(sourceMap.write())
    .pipe(concat('theme.min.css'))
    .pipe(gulp.dest('assets/less/compiled/'))
    .pipe(filesize())
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});


//Compile and concat framework and custom scripts into one file
gulp.task('scripts', function() {
  return gulp.src([
    'assets/vendor/jquery-2.2.3/jquery-2.2.3.min.js',
    'assets/vendor/bootstrap-3.3.6/dist/js/bootstrap.js',

    //ADD VENDOR JAVASCRIPT HERE


    'assets/js/*.js'
  ])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(concat('theme.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/compiled/'))
    .pipe(filesize())
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});


// Reload all Browsers
gulp.task('bs-reload', function () {
  browserSync.reload();
});

//Watch Task
//Watches less and js directories for change.
gulp.task('watch', function() {
  gulp.watch('*.html', ['bs-reload']);
  gulp.watch('assets/less/**/*.less', ['less']);
  gulp.watch('assets/js/*.js', ['scripts']);
});

//Start work with project using the default "gulp" command
gulp.task('default', ['less', 'scripts', 'browser-sync', 'watch']);




