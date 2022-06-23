class Person {
	constructor (name, gender, birthday, id, email, phoneNumber, address, user, password, role) {
		this.name = name;
		this.gender = gender;
		this.setBirthday(birthday);
		this.id = id;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.user = user;
		this.password = password;
		this.role = role;
	}

	setBirthday(birthday) {
		this.birthday = new Date(...birthday);
		// this.birthday = birthday;
	}
}