var gulp = require('gulp'),
		cleanCSS = require('gulp-clean-css'),
		concat = require('gulp-concat'),
		del = require('del'),
		fs = require('fs'),
		replace = require('gulp-replace'),
		uglifyCss = require('gulp-uglifycss');

// compile all the css into a single file
gulp.task('build-css', function() {
	return gulp.src(['src/css/pocketgrid.css','src/css/app.css'])
		.pipe(uglifyCss({"uglyComments": true}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('compiled.css'))
		.pipe(gulp.dest('build'));
});

gulp.task('html-compile', ['build-css'], function() {
	return gulp.src('src/html/index.html')
		.pipe(replace('{{CSS}}', '<style>'+fs.readFileSync('build/compiled.css', 'utf8')+'</style>'))
		.pipe(replace('{{JS}}', '/** INJECT JS HERE! */'))
		.pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
	return del(['build']);
});

gulp.task('default', ['clean','html-compile']);