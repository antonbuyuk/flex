var gulp = require('gulp');
	pug = require('gulp-pug');
	less = require('gulp-less');
	minifyCSS = require('gulp-csso');
	concat = require('gulp-concat');
	image = require('gulp-image');
	autoprefixer = require('gulp-autoprefixer');
	uglify = require('gulp-uglify');
	util = require('gulp-util');
    jsonMinify = require('gulp-json-minify');
    data = require('gulp-data'),
    fs = require('fs');
    autoprefixer = require('gulp-autoprefixer');


gulp.task('html', function() {
  return gulp.src('client/templates/index.pug')
    .pipe(data( function(file) {
                  return JSON.parse(
                    fs.readFileSync('client/assets/data/cards.json')
                  );
                } ))
    .pipe(pug())
    .pipe(gulp.dest('./build/html'));
});

gulp.task('css', function(){
  return gulp.src('client/assets/less/*')
    .pipe(less())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(concat('styles.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/assets/css'))
});

gulp.task('js', function(){
  return gulp.src([
	'client/assets/components/jquery/jquery.js',
	'client/assets/javascript/*',
	])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/javascript'))
});

gulp.task('json', function() {
    return gulp.src('client/assets/data/*.json')
        .pipe(jsonMinify())
        .pipe(gulp.dest('build/assets/data'))
        .on('error', util.log);
});

gulp.task('image', function () {
  gulp.src('client/assets/img/*')
    .pipe(image())
    .pipe(gulp.dest('build/assets/img'));
});

gulp.task('default', [ 'html', 'css', 'js', 'image', 'json' ]);