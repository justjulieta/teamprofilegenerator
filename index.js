const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Team Member Catagories
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST, 'Myteam.html');

// Function to initialize application:
function init() {
    buildTeam();
}

// Initialize application:
init();

