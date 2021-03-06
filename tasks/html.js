/* HTML */

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');
const pug = require('gulp-pug');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => (
	gulp.src('app/pug/pages/**/*.pug')
	.pipe(plumber({
		errorHandler: notify.onError(function(err) {
			return {
				title: 'HTML',
				message: err.message		
			}
		})
	}))
	.pipe(pug(gulpIf(isDevelopment, {pretty: true})))
	.pipe(gulp.dest('public'))
);