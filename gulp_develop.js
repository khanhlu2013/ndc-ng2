var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var run_sequence = require('run-sequence');

var tsProject = ts.createProject('./static/tsconfig.json',{outFile:'ndc_bundle.js'});
gulp.task('build_develop_js',function(){
	var tsResult = 
		 gulp.src(['./static/src/**/*.ts','./static/typings/browser/**/*.d.ts'])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./static/build'));	
});
gulp.task('refresh_browser',function(){
	return browserSync.reload();
})
gulp.task('build_develop_nWatch2RefreshBrowser', ['build_develop_js'], function() {
    browserSync.init({
		proxy: "127.0.0.1:8000"
    });
    gulp.watch('./static/src/**/*.ts', function(){
		run_sequence(
			['build_develop_js'],
			['refresh_browser']
		);
    });
    gulp.watch('./templates/manage_app.html', ['refresh_browser']);
});