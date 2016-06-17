/* eslint react/prop-types: 0 */
'use strict';
import reset from './reset.css';
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
		return <img src={this.props.src} onClick={this.handleClick} className={[this.props.like ? reset.hide : reset.show, reset.img].join(' ')}/>;
	}
});

export default Photo;
