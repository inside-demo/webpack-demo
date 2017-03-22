/* eslint react/prop-types: 0 */
'use strict';
import reset from './reset.css';
import React, {Component} from 'react';

export default class Photo extends Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	propTypes: {
		src: React.PropTypes.string,
		onClick: React.PropTypes.func
	}

	handleClick() {
		this.props.onClick();
	}

	render() {
		return <img src={this.props.src} className={[this.props.like ? reset.hide : reset.show, reset.img].join(' ')} onClick={this.handleClick}/>;
	}
}
