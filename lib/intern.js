const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole(role = 'intern') {
        return role;
    }
}

module.exports = Intern;