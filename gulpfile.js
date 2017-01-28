"use strict";

const gulp = require("gulp");
const mocha = require("gulp-mocha");
const util = require("gulp-util");

gulp.task("mocha", () => {
    gulp.src(["test/*.js"], { read: false })
         .pipe(mocha())
         .on("error", util.log);
});

gulp.task("watch-mocha", () => {
    gulp.watch(["./**", "./test/**"], ["mocha"]);
});

gulp.task("default", ["watch-mocha"]);
