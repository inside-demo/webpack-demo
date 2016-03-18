module.exports = {
	module: {
		preLoaders: [{
			test: /\.js[x]?$/,
			loader: 'xo-loader',
			exclude: /node_modules/
		}],
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.js[x]?$/,
			loader: 'babel'
		}, {
			test: /\.jpg$/,
			loader: 'file-loader'
		}]
	}
};
