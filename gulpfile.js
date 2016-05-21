var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');

var config = {
    "dist": "dist/",
    "markup": {
        "viewsDir": "views/"
    },
    "images": {
        "source": "img_src/",
        "dir": "img/",
        "viewsSource": "views/images_src/",
        "viewsDir": "views/images/"
    },
    "scripts": {
        "dir": "js/",
        "viewsDir": "views/js/"
    },
    "styles": {
        "dir": "css/",
        "viewsDir": "views/css/"
    }
};

gulp.task('compress_scripts', function () {
    gulp.src(config.scripts.dir + '*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(config.dist + config.scripts.dir));
});

gulp.task('compress_styles', function () {
    gulp.src(config.styles.dir + '*.css')
        .pipe(plumber())
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.dist + config.styles.dir));
});

gulp.task('compress_markup', function () {
    gulp.src('*.html')
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.dist));
});

gulp.task('compress_images', function () {
    gulp.src(config.images.dir + '*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist + config.images.dir));
});

gulp.task('compress_vscripts', function () {
    console.log('config.scripts.viewsDir = ' + config.scripts.viewsDir);
    gulp.src(config.scripts.viewsDir + '*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(config.dist + config.scripts.viewsDir));
});

gulp.task('compress_vstyles', function () {
    gulp.src(config.styles.viewsDir + '*.css')
        .pipe(plumber())
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.dist + config.styles.viewsDir));
});

gulp.task('compress_vmarkup', function () {
    gulp.src(config.markup.viewsDir + '*.html')
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.dist + config.markup.viewsDir));
});

gulp.task('compress_vimages', function () {
    gulp.src(config.images.viewsDir + '*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist + config.images.viewsDir));
});

gulp.task('watch', function () {
    gulp.watch(config.scripts.dir + '*.js', ['compress_scripts']);
    gulp.watch(config.styles.dev + '*.css', ['compress_styles']);
    gulp.watch('*.html', ['compress_markup']);
    gulp.watch(config.images.dir + '*',['compress_images']);
    gulp.watch(config.scripts.viewsDir + '*.js', ['compress_vscripts']);
    gulp.watch(config.styles.viewsDir + '*.css', ['compress_vstyles']);
    gulp.watch(config.markup.viewsDir + '*.html', ['compress_vmarkup']);
    gulp.watch(config.images.viewsDir + '*',['compress_vimages']);
});

gulp.task('default', [
    'compress_scripts',
    'compress_styles',
    'compress_markup',
    'compress_images',
    'compress_vscripts',
    'compress_vstyles',
    'compress_vmarkup',
    'compress_vimages'//,
//    'watch'
] 
);