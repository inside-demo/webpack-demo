'use strict';
export default class mymodule {
	constructor(opt) {
		this.opt = Object.assign({}, opt);
	}
	get options() {
		return this.opt;
	}
	set options(val) {
		this.opt[val] = val;
	}
}
