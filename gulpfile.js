var gulp = require('gulp'),
	notify = require("gulp-notify"),
	changed = require('gulp-changed'),
	concat = require('gulp-concat'),
	autoprefix = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	inject = require('gulp-inject'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	browserSync = require("browser-sync"),
	reload  = browserSync.reload,
	svgmin = require('gulp-svgmin'),
	minifyCSS = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	jshint = require('gulp-jshint'),
	pkg = require('./package.json');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('clean-up', function () {
  return gulp.src(['assets/css/*.css', 'assets/js/*.js'], {read: false})
    .pipe(clean());
});

gulp.task('html', ['clean-up'], function () {
  var target = gulp.src('index.html');
  var sources = gulp.src(['./assets/js/' + pkg.name + '.js', './assets/css/*.css'], {read: false});
  
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./assets/js/' + pkg.name + '.js')
    .pipe(jshint())
    .pipe(notify("Js Hinted..."))
    .pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './assets/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgSrc))
    .pipe(imagemin())
    .pipe(notify("Images minified"))
    .pipe(gulp.dest(imgSrc));
});

// JS concat and minify
gulp.task('scripts', function() {
  gulp.src(['./assets/js/plugins/*.js', './assets/js/src/*.js'])
    .pipe(concat(pkg.name + '.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(rename(pkg.name + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'))
    .pipe(notify({message: 'JS processed!'}));
});

// CSS concat, auto-prefix and minify
gulp.task('sass', function() {
    gulp.src('assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({style: 'expanded', includePaths: [ './assets/scss/partials', './assets/scss/modules', './assets/scss/helpers' ], errLogToConsole: true }))
    .pipe(autoprefix('last 2 version'))
    .pipe(rename(pkg.name + '.css'))
    .pipe(gulp.dest('assets/css'))
    // .pipe(reload({stream: true}))
    .pipe(notify({message: 'SCSS processed!'}));
});

gulp.task('svgmin', function() {
    return gulp.src('assets/images/svg/*.svg')
      .pipe(plumber())
        .pipe(svgmin())
        .pipe(gulp.dest('assets/images/svg'))
        .pipe(notify({message: 'svgs minified!'}));
});

gulp.task('setup', ['sass', 'scripts', 'html']);

gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./"
    });
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch(['*.html', 'assets/css/**', 'assets/js/**']).on('change', reload);
});

gulp.task('default', ['connect', 'watch', 'serve']);

gulp.task('default', function () {
  gulp.start('scripts', 'sass', 'imagemin', 'svgmin', 'serve');
  // Watch .js files
  gulp.watch('assets/js/src/*.js', ['scripts']);
   // Watch .scss files
  //gulp.watch('assets/scss/**/*.scss', ['sass']);
   // Watch image files
  gulp.watch('assets/images/**', ['imagemin']);
   // Watch svg files
  // gulp.watch('assets/images/svg/**', ['svgmin', 'svgstore']);
});
