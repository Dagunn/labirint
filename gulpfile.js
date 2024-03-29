const {src, dest, watch, parallel, series} = require('gulp');

const sass        = require('gulp-sass')(require('sass'));
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');

function styles() {
    return src('app/styles/**/*.scss')
        .pipe(autoprefixer({overrideBrowserslists: ['last 10 version']}))
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
        'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function watcher() {
    watch(['app/styles/**/*.scss'], styles)
    watch(['app/js/main.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
}

function fonts() {
    return src('app/fonts/**/*')
     .pipe(dest('dist'))
}

function images() {
    return src('app/images/**/*')
     .pipe(dest('dist'))
}

function cleanDist() {
    return src('dist')
    .pipe(clean())
}

function building() {
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/*.html',
        'app/fonts/**/*',
        'app/images/**/*'
    ], {base : 'app'})
        .pipe(dest('dist'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.watcher = watcher;
exports.browsersync = browsersync;

exports.build = series(cleanDist, building );
exports.default = parallel(styles, scripts, fonts, images, browsersync, watcher);
