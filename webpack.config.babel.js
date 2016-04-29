import webpack from 'webpack';
import path from 'path';

export default {
	devtool: 'eval',
	context: path.resolve(__dirname + '/src'),
	entry: {
	  app: './app.jsx'
	},
	output: {
	    path: path.resolve(__dirname + '/dist'),
	    filename: '[name].bundle.js'
	},
	plugins: [
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	     }
	  })
	],
	resolve: {
	   extensions: ['', '.js', '.jsx']
	},
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
				loader: 'style!css',
				exclude: /node_modules/
			},
			{
				test: /\.js[x]?$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.jpg$/,
				loader: 'file',
				exclude: /node_modules/
			}
		]
	}
};
