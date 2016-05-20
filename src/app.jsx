/* global document */
/* global FileReader:false */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Module from './module.js';
import Photo from './photo.jsx';
import Form from './form.jsx';

let module = new Module({'test-webpack': true});
module.options = 'test-webpack';

console.log(module.options['test-webpack']);

const App = React.createClass({
	getInitialState() {
		return {
			image: {
				like: false,
				src: require('./123.jpg')
			}
		};
	},

	handleLike() {
		System.import('./module.js').then(module => {
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
		reader.onload = event => {
			this.setState(previousState => {
				previousState.image.src = event.target.result;
				previousState.image.like = false;
				return previousState;
			});
		};
		this.setState(previousState => {
			previousState.image.like = true;
			return previousState;
		});
		reader.readAsDataURL(event.target.files[0]);
	},

	render() {
		return (
			<div>
				<Photo {...this.state.image} onClick={this.handleLike}/>
				<Form onChange={this.handleChangeImage}/>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));
