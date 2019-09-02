var gulp = require("gulp");
var gutil = require("gulp-util");
var jspm = require("jspm");
var webpack = require("webpack");

gulp.task("default", function() {
  var webpackConfiguration = require("./webpack.config.js");
  if (typeof webpackConfiguration === "function") {
    const argv = {
      mode: (gutil.env.minify && "production") || "development"
    };
    webpackConfiguration = webpackConfiguration(process.env, argv);
    Object.assign(webpackConfiguration, argv);
  }
  const webpackCompiler = webpack(webpackConfiguration);
  return new Promise((resolve, error) => {
    return webpackCompiler.run((err, stats) => {
      const printStats = () => stats.toString({ colors: true });
      if (err) {
        return error(err);
      }
      if (stats.hasErrors()) {
        gutil.log(`${"Error"} bundling '${"webpack"}':\n${printStats()}`);
      } else {
        gutil.log(printStats());
      }
      return resolve(stats);
    });
  });
});
