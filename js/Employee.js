class Employee extends Person {
    constructor(...args) {
        super(...args);
        this.state = "inactive";
    }

    static createEmployee({name, gender, birthday, id, email, phoneNumber, address, user, password, role}) {
        return new Employee(name, gender, birthday, id, email, phoneNumber, address, user, password, role);
    }

    activateEmployee() {
        this.state = "active";
    }
}