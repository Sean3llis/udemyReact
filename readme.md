##React Boilerplate

run *npm install* to get local dependencies resolved. Gulp is the taskrunner for this boilerplate. 'Pack' compiles the code, 'serve' runs a local development middleware, integrated with webpack, and 'watch' watches for changes to JS files.

look for changes at http://localhost:8080

####Gulpfile.js quick reference
```js
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

gulp.task('watch', ['pack'], function(){
	gulp.watch('src/**/*.js', ['pack']);
});
```