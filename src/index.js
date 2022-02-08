module.exports = function toReadable(number) {
	const dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const tn = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const tw = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	/* function for two digit number */
	function twoNumber(a, b) {
		console.log(a, b)
		let human;
		if (b === 0) {
			human = tw[a - 1]
		}
		else if (a === 1) {
			human = tn[b - 1]
		}
		else { human = `${tw[a - 1]} ${dg[b]}` }
		return human
	}
	/* function for three digit number */
	function threeNumber(a, b, c) {
		let human;
		if (a > 0 && b === 0 && c === 0) {
			human = `${dg[a]} hundred`
		}
		else if (a > 0 && b === 0 && c > 0) {
			human = `${dg[a]} hundred ${dg[c]}`
		}
		else if (a > 0 && b > 0 && c === 0) {
			human = `${dg[a]} hundred ${tw[b - 1]}`
		}
		else if (a > 0 && b === 1 && c > 0) {
			human = `${dg[a]} hundred ${tn[c - 1]}`
		}
		else { human = `${dg[a]} hundred ${tw[b - 1]} ${dg[c]}` }
		return human
	}
	//===================================
	let humanNumber = '';
	let mass = Array.from(String(number), Number);
	if (mass.length === 1) {
		humanNumber = dg[mass[0]];
	}
	else if (mass.length === 2) {
		humanNumber = twoNumber(mass[0], mass[1])
	}
	else if (mass.length === 3) {
		humanNumber = threeNumber(mass[0], mass[1], mass[2])
	}
	return humanNumber
}