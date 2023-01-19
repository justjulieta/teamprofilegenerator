const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email);
        this.GitHub = GitHub;
    }
    getGitHub() {
        return this.GitHub;
    }
    getRole(role = 'engineer') {
        return role;
    }
}

module.exports = Engineer;