const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src('./sass/main.scss')
        .pipe(scss())
        .pipe(autoPrefixer('last 5 versions'))
        .pipe(cssMinify())
        .pipe(dest('./dist'))
}

const jsMinify = require('gulp-terser');

function scripts() {
    return src('./js/*.js')
        .pipe(jsMinify())
        .pipe(dest('./dist'))
}

function watchTask() {
    watch(
            [
            './sass/*.scss',
            './js/*.js'
            ],
            series(styles, scripts)
        )
}

exports.default = series(styles, scripts, watchTask);