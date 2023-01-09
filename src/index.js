const One = require('./classes/One');
const Two = require('./classes/Two');
const Three = require('./classes/Three');

module.exports = function toReadable(number) {
	const num = Array.from(String(number), Number);

	if (num.length === 1) {
		const one = new One(num[0]);
		return one.convertingOne()
	}
	else if (num.length === 2) {
		const two = new Two(num[0], num[1])
		return two.convertingTwo()
	}
	else if (num.length === 3) {
		const three = new Three(num[0], num[1], num[2])
		return three.convertingThree()
	}
}