module.exports = {
	module: {
		preLoaders: [
			{
				test: /\.js[x]?$/,
				loader: 'eslint',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.js[x]?$/,
				loader: 'babel'
			},
			{
				test: /\.jpg$/,
				loader: 'file'
			}
		]
	}
};
