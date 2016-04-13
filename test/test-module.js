'use strict';
import test from 'ava';
import Module from '../src/module';

test('test my module get', t => {
	const module = new Module({'test-webpack': 'test-webpack'});
	t.deepEqual('test-webpack', module.options['test-webpack']);
});

test('test my module set', t => {
	let module = new Module({'test-webpack': true});
	module.options = 'test-webpack';
	t.deepEqual('test-webpack', module.options['test-webpack']);
});
