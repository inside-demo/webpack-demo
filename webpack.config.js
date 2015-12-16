module.exports = {
  module: {
  	loaders: [
  		{
  			test: /\.css$/,
  			loader: 'style-loader!css-loader'
  		},
  		{
  			test: /\.(js|jsx)$/,
  			loader: 'babel?presets[]=es2015&presets[]=react'
  		},{
			test: /\.jpg$/,
			loader: 'file-loader'
		}
  	]
  }
}