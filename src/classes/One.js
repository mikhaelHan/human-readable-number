const data = require('./data');

class One {
	constructor (first) {
		this.first = first;
	}
	convertingOne(a) {
		return arguments.length === 0 ? data.dg[this.first] : data.dg[a];
	}
}

module.exports = One;