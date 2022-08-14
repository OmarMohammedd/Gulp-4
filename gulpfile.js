var livereload = require("gulp-livereload");
var gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const { parallel } = require('gulp');


function minifyhtml() {
  return gulp
    .src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}



function movecss() {
    return gulp
    .src("src/main.css")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}



exports.default = function () {
  require("./server.js");
  livereload.listen();

  gulp.watch( ["src/index.html"] , parallel(minifyhtml, movecss));
};
