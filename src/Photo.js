'use strict';
require('./reset.css');
import React from 'react';
class Photo extends React.Component {

	constructor() {
		super();

		this.state = {
			like: false
		}
	}

	handleLike() {
		this.setState({
			like: !this.state.like
		})
	}
	render() {
		return <img src={this.props.src} onClick={this.handleLike.bind(this)} className={this.state.like ? 'hide': 'show'} />;
	}
}
export default Photo;