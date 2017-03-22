/* eslint react/prop-types: 0 */
/* global fetch:false */
/* global FormData:false */
/* eslint quote-props: ["error", "as-needed"] */
'use strict';
import React, {Component} from 'react';
import useSheet from 'react-jss';
import styles from './styles.css';

const jss = {
	form: {
		position: 'fixed',
		top: 0,
		right: 0,
		height: '40px',
		'background-color': 'rgba(255,255,255, .2)'
	}
};

@useSheet(jss)
export default class Form extends Component {
	propTypes: {
		onChange: React.PropTypes.func,
		filename: React.PropTypes.string
	}

	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onChange(event);
	}

	handleSubmit(event) {
		fetch('http://google.ru', {
			method: 'POST',
			body: new FormData(event.target)
		});
		event.preventDefault();
	}

	render() {
		const {classes} = this.props;

		return (
			<form name="forms" className={classes.form} onSubmit={this.handleSubmit}>
				<label className={styles.files} htmlFor="files">
					{this.props.filename}
					<input id="files" name="files" type="file" onChange={this.handleChange}/>
				</label>
				<input type="submit" value="send" className={styles.submit}/>
			</form>
		);
	}
}
