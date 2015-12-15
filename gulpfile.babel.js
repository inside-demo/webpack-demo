import gulp from 'gulp';
import webpack from 'webpack-stream';

gulp.task('bundler', () => {
    gulp.src('./src/app.jsx')
      .pipe(webpack({
		module: {
			loaders: [{
				test: /\.js|\.jsx$/,
				loader: 'babel-loader'
			},{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},{
				test: /\.jpg$/,
				loader: 'file-loader'
			}]
		},
		output: {
			filename: 'bundle.js'
		}
	}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['bundler']);