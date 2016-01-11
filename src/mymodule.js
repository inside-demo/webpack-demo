'use strict';
class mymodule {

	constructor(options) {
		this.options = options;
		this.init();
	}

	init() {
		console.log(this.options);
	}
}
export default mymodule;
