var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

gulp.task('build-css', function() {
	return gulp.src(['src/css/pocketgrid.css','src/css/app-style.css'])
		.pipe(uglifyCss({"uglyComments": true}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('compiled.css'))
		.pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
	return del(['build']);
});

gulp.task('default', ['clean', 'build-css']);