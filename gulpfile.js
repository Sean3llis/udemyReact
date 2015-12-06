var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackDevConfig = require('./dev.config.js');
var WebpackDevServer = require("webpack-dev-server");
var sass = require("gulp-sass");

var compiler = webpack(webpackDevConfig);

gulp.task('default', ['watch']);

gulp.task('pack', function(callback){
    compiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
        	colors: true
        }));
        callback();
    });
});

gulp.task('sass', function(){
    gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(__dirname + '/app/css'))
});

gulp.task('serve', function(callback){
	new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        callback();
    });
});

gulp.task('watch', [ 'sass', 'pack' ], function(){
    gulp.watch('src/**/*.js', ['pack']);
	gulp.watch('src/sass/**/*.scss', ['sass']);
});