const data = require('./data');
const One = require('./One');

class Two extends One {
	constructor (first, second) {
		super(first);
		this.second = second;
	}
	convertingTwo(a, b) {
		if (arguments.length === 0) {
			if (this.second === 0) {
				return data.tw[this.first - 1]
			}
			else if (this.first === 1) {
				return data.tn[this.second - 1]
			}
			else {
			} return `${data.tw[this.first - 1]} ${this.convertingOne(this.second)}`
		}
		else {
			if (b === 0) {
				return data.tw[a - 1]
			}
			else if (a === 1) {
				return data.tn[b - 1]
			}
			else {
			} return `${data.tw[a - 1]} ${this.convertingOne(b)}`
		}
	}

}

module.exports = Two;