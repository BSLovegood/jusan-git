class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullname() {
        return `${this.firstName()} ${this.lastName()}`;
    }

    email() {
        return `${this.firstName().toLowerCase()}.${this.lastName().toLowerCase()}@company.com`;
    }

    firstname() {
        return this.firstName();
    }

    lastname() {
        return this.lastName();
    }
}