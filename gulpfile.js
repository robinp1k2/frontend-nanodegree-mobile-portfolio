var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var htmlmin = require('gulp-htmlmin');

gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('styles', function () {
    gulp.src('css/*.css')
        .pipe(plumber())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('markup', function () {
    gulp.src('*.html')
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
    gulp.src('views/*.html')
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('css/*.css', ['styles']);
    gulp.watch('*.html', ['markup']);
    gulp.watch('views/*.html', ['markup']);
});

gulp.task('default', [
    'scripts',
    'styles',
    'watch'
] 
);