// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        choices:['MIT', 'GNUPLv3', 'ISC'],
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
        message: 'Questions?',
        name: 'questions',
    },
]

function generator() {
    return inquirer.prompt(questions)
    .then((data)=>{
        const markdown = generateMarkdown(data);
        console.log(markdown);
        return data;
    })
    .catch((error)=>{
        console.log(error)
    })
}
generator();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
