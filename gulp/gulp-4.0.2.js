"use strict";
const gulp = require("gulp"),
  concat = require("gulp-concat"),
  less = require("gulp-less"),
  sourcemaps = require("gulp-sourcemaps"),
  cleancss = require("gulp-clean-css"),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify");

gulp.task("styles", function() {
  return gulp
    .src("less/style.less")
    .pipe(sourcemaps.init())
    .pipe(less({ outputStyle: "expand" }).on("error", notify.onError()))
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function() {
  gulp.watch("less/**/*.less", gulp.series("styles"));
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("styles"), gulp.parallel("watch"))
);
