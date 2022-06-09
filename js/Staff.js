//Agents load:

const staff = []

// Staff database

	// Test administrator:

staff.push(new Employee(
	"Test Administrator",
	"female",
	new Date(1924, 11, 9),
	1234,
	"randomemail@gmail.com",
	"571-239-6675",
	"1940 Caracas Street",
	"test.admin",
	"1234",
	"administrator"
));

	// Office administrator:

staff.push(new Employee(
	"Charles S Marsh",
	"male",
	new Date(1948, 3, 13),
	085806007,
	"brando.terr1@gmail.com",
	"718-354-7224",
	"4782 Pride Avenue",
	"charles.marsh",
	"2ZP&;c6g3s",
	"administrator"
));

	// Office 1st Agent:

staff.push(new Employee(
	"Robert L Brooks",
	"male",
	new Date(1992, 8, 2),
	094805437,
	"matt1996@yahoo.com",
	"212-632-3715",
	"3156 Oakwood Avenue",
	"robert.brooks",
	"4}Y*[nEv<s",
	"agent"
));

	// Office 2nd Agent:

staff.push(new Employee(
	"Billy J Hudgens",
	"male",
	new Date(1980, 1, 3),
	107204895,
	"mariah1993@hotmail.com",
	"646-848-9409",
	"3594 Forest Avenue",
	"william.hudgens",
	"-<V~Mk99*d",
	"agent"
));

for (const employee of staff) {
	employee.activateEmployee();
}

localStorage.setItem("staff", JSON.stringify(staff));



