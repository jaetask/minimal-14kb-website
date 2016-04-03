var gulp = require('gulp'),
		chunknlines = require('chunknlines'),
		cleanCSS = require('gulp-clean-css'),
		concat = require('gulp-concat'),
		del = require('del'),
		fs = require('fs'),
		replace = require('gulp-replace'),
		uglify = require('gulp-uglify'),
		uglifyCss = require('gulp-uglifycss'),
		wrapMD = require("./gulp-markdown-to-json-string");


gulp.task('build-css', function() {
	return gulp.src(['src/css/pocketgrid.css','src/css/app.css'])
		.pipe(uglifyCss({"uglyComments": true}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('compiled.css'))
		.pipe(gulp.dest('build'));
});

gulp.task('build-md', function() {
	return gulp.src(['src/content/index.md'])
		.pipe(wrapMD('contentIndex'))
		.pipe(concat('content.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('build-js', function() {
	return gulp.src([
			//'node_modules/scriptjs/dist/script.js',       // RequireJS replacement
			//'node_modules/bullet-pubsub/dist/bullet.js',  // PubSub event bus 1.4K gzipped
			//'node_modules/bullet-pubsub/dush/index.js',   // PubSub event bus - 828 bytes gzipped
			//'node_modules/rlite-router/rlite.js',         // Page Routing
			//'node_modules/domchanger/domchanger.js',      // React style DOM components
			//'node_modules/j140/index.js',                 // String template engine
			'node_modules/micromarkdown/micromarkdown.js',
			'src/js/app.js'
		])
		.pipe(uglify({"uglyComments": true}))
		.pipe(concat('compiled.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('html-compile', function() {
	return gulp.src('src/html/index.html')
		.pipe(replace('{{CSS}}', '<style>'+fs.readFileSync('build/compiled.css', 'utf8')+'</style>'))
		.pipe(replace('{{DATA}}', '<script>'+fs.readFileSync('build/content.js', 'utf8')+'</script>'))
		.pipe(replace('{{JS}}', '<script>'+fs.readFileSync('build/compiled.js', 'utf8')+'</script>'))
		.pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
	return del.sync(['build']);
});

gulp.task('default', ['clean', 'build-md', 'build-css', 'build-js', 'html-compile']);