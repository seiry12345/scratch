const gulp = require("gulp"),
		sourcemaps = require("gulp-sourcemaps"),
		plumber = require("gulp-plumber"),
		sass = require("gulp-sass"),
		autoprefixer = require("gulp-autoprefixer"),
		minifyCss = require("gulp-clean-css"),
		babel = require("gulp-babel"),
		uglify = require("gulp-uglify"),
		concat = require("gulp-concat"),
		autoprefixer_options = {
			browsers: ["last 3 versions", "> 0.5%"]
		};

gulp.task("sass", () => {
	return gulp
			.src(["scss/**/!(_)*.scss"], {
				since: gulp.lastRun("sass")
			})
			.pipe(sourcemaps.init())
			.pipe(plumber())
			.pipe(sass())
			.pipe(autoprefixer())
			.pipe(minifyCss())
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest("css/"));
});

gulp.task("js", () => {
	return gulp
			.src(["js/main.js"], {since: gulp.lastRun("js")})
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(
					babel({
						presets: ["@babel/env"]
					})
			)
			.pipe(concat("main.min.js"))
			.pipe(uglify())
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest("js/"));
});

gulp.task("dev", gulp.series("sass", "js"));

gulp.task("watch", () => {
	const watch = [
		"scss/**/*.scss",
		"js/main.js"
	];

	gulp.watch(watch, gulp.series("dev"));
});

gulp.task("default", gulp.series(gulp.parallel("watch")));