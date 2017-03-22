import webpack from 'webpack';
import path from 'path';
import styleLintPlugin from 'stylelint-webpack-plugin';

export default {
	devtool: 'eval',
	context: path.resolve(__dirname + '/src/'),
	entry: {
		app: './app.jsx'
	},
	output: {
		path: path.resolve(__dirname + '/docs/'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new styleLintPlugin({
			configFile: './node_modules/stylelint-config-standard/index.js',
			files: '**/*.css',
			failOnError: false
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: true}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		})
	],
	resolveLoader: {
		modules: [path.resolve(__dirname, "src"), 'node_modules'],
		extensions: ['.js', '.jsx', '.css', '.jpg']
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js[x]?$/,
				loader: 'eslint-loader'
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					}
				]
			},
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader'
			}
		]
	}
};
