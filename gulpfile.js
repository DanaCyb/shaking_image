const {src,dest,series} = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

var sass = require("gulp-sass")(require('sass'));