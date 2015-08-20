var gulp = require('gulp');
var gulpPrint = require('gulp-print');
var gulpUglify = require('gulp-uglify');
var gulpJsHint = require('gulp-jshint');
var del = require('del');

gulp.task('clean', function (done) {
    del('./build',done);
});


gulp.task('check', ['clean'], function () {
    return gulp
        .src('./src/**/*.js')
        .pipe(gulpPrint())
        .pipe(gulpJsHint())
        .pipe(gulpJsHint.reporter('jshint-stylish',{verbose:true}))
        .pipe(gulpUglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
    return gulp.watch('./src/**/*.js', ['check']);
});
