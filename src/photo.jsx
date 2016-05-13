/* eslint react/prop-types: 0 */
'use strict';
require('./reset.css');
import React from 'react';
export default class Photo extends React.Component {

	constructor() {
		super();

		this.state = {
			like: false
		};

		this.handleLike = this.handleLike.bind(this);
	}

	handleLike() {
		System.import('./module.js').then(module => {
			console.log(module);
		}).catch(err => {
			console.log(err);
		});

		this.setState({
			like: !this.state.like
		});
	}
	render() {
		return <img src={this.props.src} onClick={this.handleLike} className={this.state.like ? 'hide' : 'show'}/>;
	}
}
