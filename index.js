// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices:['MIT', 'Apache2.0', 'IBM', 'ISC', 'None'],
        filter(value) {
            return value;
        }
    },
    {
        type: 'input',
        message: 'Contributing?',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter email for questions?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter github link?',
        name: 'github',
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log('Could not generate README.');
        }
        console.log('README has been generated. Check files to confirm.');
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
       writeToFile('./testREADME.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
