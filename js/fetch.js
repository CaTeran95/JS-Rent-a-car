let staff = []

fetch('../employees.json')
    .then((res) => res.json())
    .then((data) => {
        staff = data;
        for (let index = 0; index < staff.length; index++) {
            staff[index] = Employee.createEmployee(staff[index]);    
        }
        staff[0].activateEmployee();
        rechargeTable();
    })
    .catch((err) => console.log(err));