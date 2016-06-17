import webpack from 'webpack';
import path from 'path';
import styleLintPlugin from 'stylelint-webpack-plugin';

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
		}),
		new styleLintPlugin({
			configFile: './node_modules/stylelint-config-standard/index.js',
			files: '**/*.css',
			failOnError: false
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
