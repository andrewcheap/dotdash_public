// Include gulp
const gulp = require('gulp');

// Include config
const config = require('./gulp.conf')

// Include plugins
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlreplace = require('gulp-html-replace');
const cleanCSS = require('gulp-clean-css');
const templateCache = require('gulp-angular-templatecache');

// Define paths
const path = {
	HTML: 'index.html',
	APP: 'app',
	WATCH_FILES: [config.files.app, config.files.css],
	PROD_JS: 'all.min.js',
	DEV_JS: 'all.js',
	DEST_DEV: 'dist/dev',
	DEST_PROD: 'dist/prod',
};

// DEV TASKS

// templateCache
gulp.task('templateCache', function () {
  return gulp.src(config.files.templates)
    .pipe(templateCache('templates.js', 
    {
    	standalone: true,
    	moduleSystem: 'IIFE',
    }))
    .pipe(gulp.dest(path.APP));
});

let ALL_JS = config.files.vendor.concat(config.files.app);
let ALL_CSS = config.files.vendorCss.concat(config.files.css);

/* lint */
gulp.task('lint', function() {
	return gulp.src(config.files.app)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

/* copy */
gulp.task('copy', function(){
	gulp.src(path.HTML)
		.pipe(gulp.dest(path.DEST_DEV));
});

/* concat JS */
gulp.task('concatJS', function() {
	return gulp.src(ALL_JS)
		.pipe(concat('all.js'))
		.pipe(gulp.dest(path.DEST_DEV))
});

/* concat CSS */
gulp.task('concatCSS', function() {
	return gulp.src(ALL_CSS)
		.pipe(concat('all.css'))
		.pipe(gulp.dest(path.DEST_DEV))
});

/*get fonts*/
gulp.task('getFonts', function() {
	return gulp.src(config.files.fonts)
		.pipe(gulp.dest(path.DEST_DEV + '/fonts'))
		.pipe(gulp.dest(path.DEST_PROD + '/fonts'))
});

/*get images*/
gulp.task('getImages', function() {
	return gulp.src(config.files.images)
		.pipe(gulp.dest(path.DEST_DEV + '/images'))
		.pipe(gulp.dest(path.DEST_PROD + '/images'))
});

/* watch */
gulp.task('watch', function() {
	gulp.watch(path.WATCH_FILES, ['lint', 'templateCache', 'copy', 'concatCSS', 'concatJS','getFonts', 'getImages']);
})

/* set default */
gulp.task('default', ['watch']);

// PROD TASKS

/* minifyJS */
gulp.task('minifyJS', function() {
	return gulp.src(ALL_JS)
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(path.DEST_PROD));
});

gulp.task('minifyCSS', function() {
	return gulp.src(ALL_CSS)
		.pipe(concat('all.min.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(path.DEST_PROD));
});

/* replaceHTML */
gulp.task('replaceHTML', function(){
	gulp.src(path.HTML)
		.pipe(htmlreplace({
			'js': 'all.min.js',
			'css': 'all.min.css'
		}))
		.pipe(gulp.dest(path.DEST_PROD));
});

/* prod */
gulp.task('prod', ['replaceHTML', 'minifyCSS', 'minifyJS', 'getFonts', 'getImages']);