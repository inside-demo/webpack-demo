/* global document */
/* global FileReader:false */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo.jsx';
import Form from './form.jsx';

const App = React.createClass({
	getInitialState() {
		return {
			filename: 'select file',
			image: {
				like: false,
				src: require('./123.jpg')
			}
		};
	},

	handleLike() {
		import('./module.js').then(module => {
			console.log(module);
		}).catch(err => {
			console.log(err);
		});

		this.setState(previousState => {
			previousState.image.like = !previousState.image.like;
			return previousState;
		});
	},

	handleChangeImage(event) {
		const reader = new FileReader();
		const filename = event.target.value;
		reader.onload = event => {
			this.setState(previousState => {
				previousState.image.src = event.target.result;
				previousState.image.like = false;
				return previousState;
			});
		};
		this.setState(previousState => {
			previousState.image.like = true;
			previousState.filename = filename;
			return previousState;
		});
		reader.readAsDataURL(event.target.files[0]);
	},

	render() {
		return (
			<div>
				<Photo {...this.state.image} onClick={this.handleLike}/>
				<Form filename={this.state.filename} onChange={this.handleChangeImage}/>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));
