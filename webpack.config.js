module.exports = {
  module: {
  	loaders: [
  		{
  			test: /\.css$/,
  			loader: 'style-loader!css-loader'
  		},
  		{
  			test: /\.(js|jsx)$/,
  			loader: 'babel'
  		},{
			test: /\.jpg$/,
			loader: 'file-loader'
		}
  	]
  }
}