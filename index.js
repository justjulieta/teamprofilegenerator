// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Connect to GenerateHTML
const generateHTML = require('./src/generateHTML');

// Team Member Catagories
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Team's Array
const teamArray = [];
const theTeam = [];

// Function to initialize application:
function runApp() {
    console.log('Ready to start your team?');
    
}

// Initialize application:
init();

