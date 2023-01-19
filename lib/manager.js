const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email)

    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getRole(role = 'manager') {
        return role;
    }
}

module.exports = Manager;