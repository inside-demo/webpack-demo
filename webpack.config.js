module.exports = {
  module: {
  	loaders: [
  		{
  			test: /\.css$/,
  			loader: 'style-loader!css-loader'
  		},
  		{
  			test: /\.(js|jsx)$/,
  			loader: 'babel',
        query: {
          stage: 2
        }
  		},{
			test: /\.jpg$/,
			loader: 'file-loader'
		}
  	]
  }
}