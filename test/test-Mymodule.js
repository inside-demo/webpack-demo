/* eslint linebreak-style: [2, "windows"] */
import test from 'ava';
import 'babel-core/register';
import Mymodule from '../src/Mymodule';

test('test my module', t => {
	t.same(1, (new Mymodule({test: 1})).options.test);
});
