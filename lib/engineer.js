const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    getGithub() {
        return this.githubUsername;
    }

    getRole() {
        return super.getRole('Engineer');
    }
}

module.exports = Engineer;