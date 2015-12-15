'use strict';
class Plugin {

	constructor(options) {
		this.options = options;
		this.init();
	}

	init() {
		console.log(this.options);
	}
}

export default Plugin;
