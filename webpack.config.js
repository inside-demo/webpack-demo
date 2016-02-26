module.exports = {
	module: {
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
