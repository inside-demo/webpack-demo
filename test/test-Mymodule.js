import test from 'ava';
import Plugin from '../src/mymodule.js';

test('test my module', t => {
	t.same(1, (new Plugin({test: 1})).options.test);
});
