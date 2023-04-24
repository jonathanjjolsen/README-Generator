// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'project name',
    },
    {
        type: 'input',
        message: 'Description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the color of the sky?',
        name: 'sky color',
    },
    {
        type: 'input',
        message: 'What is the meaning of life?',
        name: 'meaning of life',
    },
    {
        type: 'input',
        message: 'How old are you?',
        name: 'age',
    },
    {
        type: 'input',
        message: 'What are your plans for today?',
        name: 'plans',
    },
    {
        type: 'input',
        message: 'How many colors are in the rainbow?',
        name: 'colors',
    },
]

function generator() {
    return inquirer.prompt(questions)
    .then((data)=>{
        console.log(data)
        return data
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
