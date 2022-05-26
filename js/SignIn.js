//ID search function:

function validatePassword(user) {
	let entryPassword = prompt(titleMessage + passwordRequest);
	if (entryPassword == user.password) {
		return user;
	}
}

function searchID(ID, people) {
	for (const person of people) {
		if (person.id == ID) {
			return person;
		}
	}
}

function signIn() {
	message = titleMessage;
	do {
		message += userIDRequest;
		let entryID = prompt(message);
		if (entryID) {
			let parsedID = parseInt(entryID);
			if (!isNaN(parsedID)) {
				let user = searchID(parsedID, staff);
				if (user) {
					let attempts = attemptLimit;
					while (attempts > 0) {
						let confirmedUser = validatePassword(user);
						if (confirmedUser) {
							return user;
						} else {
							attempts--;
							if (attempts > 0) {
								alert(titleMessage + incorrectPassword + attempts);
							}
						}
					}
					alert(titleMessage + passwordAttemptsExceeded);
					return null;
				} else {					
					alert(titleMessage + userNotFound);
					return null;
				}
			} else {
                alert(titleMessage + invalidInput);
                return null;
			}
		} else {
            alert(titleMessage + emptyInput);
            return null;
		}
	} while (true);
}
