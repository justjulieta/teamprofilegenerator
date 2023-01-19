const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email)

    }
    getEmail() {
        return this.email;
    }
    getRole(role = 'manager') {
        return role;
    }
}

module.exports = Manager;