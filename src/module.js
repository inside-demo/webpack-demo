'use strict';
class module {

	constructor(options) {
		this.options = options;
		this.init();
	}

	init() {
		console.log(this.options);
	}
}
export default module;
