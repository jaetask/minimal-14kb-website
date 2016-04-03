// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-markdown-to-json-strings';


function convertToStrings(contents) {
	"use strict";

	var lines = contents
		.toString('utf8')
		.split("\n")
		.filter(function(line) {
			return true;//line.length > 0;
		})
		.map(function(line) {
			return '\t"'+line+'"'
		})
		.join(',\n');

	return new Buffer(lines, "utf-8");
}

// Plugin level function(dealing with files)
function gulpPrefixer(varName) {

	if (!varName) {
		throw new PluginError(PLUGIN_NAME, 'Missing varName!');
	}

	// Creating a stream through which each file will pass
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			// return empty file
			return cb(null, file);
		}
		if (file.isBuffer()) {
			file.contents = Buffer.concat([
				new Buffer('var page = {\n\tcontent: [\n'),
				convertToStrings(file.contents),
				new Buffer('\n\t]\n};')
			]);
		}

		cb(null, file);

	});

}

// Exporting the plugin main function
module.exports = gulpPrefixer;