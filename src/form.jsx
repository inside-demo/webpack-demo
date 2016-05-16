/* eslint react/prop-types: 0 */
/* global fetch:false */
/* global FormData:false */
/* eslint quote-props: ["error", "as-needed"] */
'use strict';
import React, {Component} from 'react';
import useSheet from 'react-jss';

const styles = {
	form: {
		position: 'absolute',
		top: 0,
		right: 0,
		padding: '10px',
		'background-color': 'rgba(255,255,255, .2)'
	}
};

@useSheet(styles)
export default class Form extends Component {

	handleSubmit(event) {
		fetch('http://google.ru', {
			method: 'POST',
			body: new FormData(event.target)
		});
		event.preventDefault();
	}

	render() {
		const {classes} = this.props.sheet;

		return (
			<form name="forms" onSubmit={this.handleSubmit} className={classes.form}>
				<input type="file"/>
				<input type="submit" value="send"/>
			</form>
		);
	}
}
