class Employee extends Person {
    constructor(...args) {
        super(...args);
        this.state = "inactive";
    }

    activateEmployee() {
        this.state = "active";
    }
}