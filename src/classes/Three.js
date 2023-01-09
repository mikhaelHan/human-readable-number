const data = require('./data');
const Two = require('./Two');

class Three extends Two {
	constructor (first, second, third) {
		super(first, second);
		this.third = third;
	}
	convertingThree() {
		if (this.first > 0 && this.second === 0 && this.third === 0) {
			return `${data.dg[this.first]} hundred`
		}
		else if (this.first > 0 && this.second === 0 && this.third > 0) {
			return `${data.dg[this.first]} hundred ${this.convertingOne(this.third)}`
		}
		else return `${data.dg[this.first]} hundred ${this.convertingTwo(this.second, this.third)}`
	}
}

module.exports = Three;