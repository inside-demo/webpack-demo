/* eslint react/prop-types: 0 */
'use strict';
require('./reset.css');
import React from 'react';

const Photo = React.createClass({
	propTypes: {
		image: React.PropTypes.object,
		onClick: React.PropTypes.func
	},

	handleClick() {
		this.props.onClick();
	},

	render() {
		return <img src={this.props.src} onClick={this.handleClick} className={this.props.like ? 'hide' : 'show'}/>;
	}
});

export default Photo;
