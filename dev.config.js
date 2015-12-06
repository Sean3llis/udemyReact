module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		path: __dirname + '/app/js',
		filename: 'app.min.js'
	},
	devtool: 'sourcemap',
	debug: true,
	module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel?presets[]=react'
	    }
	  ]
	}
}