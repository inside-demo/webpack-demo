/* eslint linebreak-style: [2, "windows"] */
'use strict';
import Mymodule from './Mymodule';
import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo.jsx';

let a = new Mymodule({test: 1});

console.log(a.options.test);

ReactDOM.render(<Photo src={require('./123.jpg')} />, document.getElementById('app'));
