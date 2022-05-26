//Round function:

function roundNumber(number, decimals) {
	let power = 1;
	for (let i = 0; i < decimals; i++) {
		power *= 10;
	}
	number *= power;
	number = parseInt(number);
	return (number = number / power);
}

//Entry validation functions:

function validateNaturalInput(optionsMessage, higherOption) {
	let message = titleMessage;
	do {
		message += optionsMessage;
		let selection = prompt(message);
		if (selection) {
			selection = parseInt(selection);
			if (!isNaN(selection) && 1 <= selection && selection <= higherOption) {
				return selection;
			} else {
				message = titleMessage + invalidInput;
			}
		} else {
			message = titleMessage + emptyInput;
		}
	} while (true);
}

function validateFloatInput(inputMessage) {
	let message = titleMessage;
	do {
		message += inputMessage;
		let float = prompt(message);
		if (float) {
			float = roundNumber(float, 3);
			if (!isNaN(float) && 0 < float) {
				return float;
			} else {
				message = titleMessage + invalidInput;
			}
		} else {
			message = titleMessage + emptyInput;
		}
	} while (true);
}
