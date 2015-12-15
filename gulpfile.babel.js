import gulp from 'gulp';
import webpack from 'gulp-webpack';
import xo from 'gulp-xo';

let config =

gulp.task('xo', () => {
    gulp.src('./src/*.js')
      .pipe(xo())
});

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

gulp.task('default', ['xo', 'bundler']);