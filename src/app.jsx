/* global document */
import Plugin from './module.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo.jsx';

console.log((new Plugin({test: 1})).options.test);

ReactDOM.render(<Photo src={require('./123.jpg')} />, document.getElementById('app'));
