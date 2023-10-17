const inquirer= require("inquirer")
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"What is the description of your project?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
/* const writeToFile=(fileName, data) => {}
const writeToFile=(fileName, data) => console.log() */

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
