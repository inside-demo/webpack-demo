/* global document */
'use strict';
import Module from './module.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo.jsx';

let module = new Module({'test-webpack': true});
module.options = 'test-webpack';

console.log(module.options['test-webpack']);

ReactDOM.render(<Photo src={require('./123.jpg')}/>, document.getElementById('app'));
