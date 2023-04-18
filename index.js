// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

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
function setupManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Name',
                message: "What's the name of your team Manager?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter your manager's name.";
                },
            },
            {
                type: 'input',
                name: 'ID',
                message: "What's your manager's ID?",
            },
            {
                type: 'input',
                name: 'Email',
                message: 'What is the email address of this team Manager?',
                validate: (answer) => {
                    if (answer!== '') {
                        return true;
                    }
                    return "What's the manager's email?";
                },
            },
            {
                type: 'input',
                name: 'Phone Number',
                message: "What's the manager's phone number?",
            },
        ])
        .then((answers) => {
            const teamManager = new Manager(
                answers.nameOfManager,
                answers.idOfManager,
                answers.emailOfManager,
                answers.phoneNumber,
            );
            theTeam.push(teamManager);
            teamArray.push(answers.idOfManager);
            teamBuild();
        });
};

function teamBuild() {
    inquirer
        .prompt([
            {
            type: 'list',
            name: 'New Member',
            message: "Would you like to add a new team member?",
            choices: ['Engineer', 'Intern', 'No, I would not.'],
            }
        ])
        .then((chosenMember) => {
            switch (chosenMember.newMember) {
                case 'Engineer':
                    setupEngineer();
                    break;
                case 'Intern':
                    setupIntern();
                    break;
                default:
                    generateHTML();
            }
        })

        function setupEngineer() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'Name',
                        message: "What's the name of the engineer?",
                    },
                    {
                        type: 'input',
                        name: 'ID',
                        message: "What's the engineer's employee ID?",
                    },
                    {
                        type: 'input',
                        name: 'Email',
                        message: "What's the engineer's email?",
                    },
                    {
                        type: 'input',
                        name: 'GitHub',
                        message: "What's the engineer's GitHub?",
                    }
               ])
               .then((answers) => {
                    const teamEngineer = new Engineer(
                        answers.nameOfEngineer,
                        answers.idOfEngineer,
                        answers.emailOfEngineer,
                        answers.github,
                    );
                    theTeam.push(teamEngineer);
                    teamArray.push(answers.idOfEngineer);
                    teamBuild();
               });
        }

        function setupIntern() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'Name',
                        message: 'What is the name of the new Intern?',
                    },
                    {
                        type: 'input',
                        name: 'ID',
                        message: "What's the intern's employee ID?",
                    },
                    {
                        type: 'input',
                        name: 'Email',
                        message: "What's the intern's email?",
                    },
                    {
                        type: 'input',
                        name:'School',
                        message: "What's the name of the school the intern attended?",
                    },
               ])
               .then((answers) => {
                    const teamIntern = new Intern(
                        answers.nameOfIntern,
                        answers.idOfIntern,
                        answers.emailOfIntern,
                        answers.school,
                    );
                    theTeam.push(teamIntern);
                    teamArray.push(answers.idOfIntern);
                    teamBuild();
               });
        }
}

// need to write this function
function generateHTML() {
    if (!fs.existsSync(DIST)) {
        fs.mkdirSync(DIST);
    }
    fs.writeFileSync(distPath, render(theTeam), 'utf8');
}

setupManager();

// Run application:
runApp();
