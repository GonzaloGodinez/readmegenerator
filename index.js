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
    {
        type:"input",
        name:"Motivation",
        message:"What was your motivation?"
    },
    {
        type:"input",
        name:"why",
        message:"Why did you build this project?"
    },
    {
        type:"input",
        name:"Problem",
        message:"What problem does it solve?"
    },
    {
        type:"input",
        name:"learn",
        message:"What did you learn?"
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const readTemplate = generateMarkdown(data)
    fs.writeFile("./utils/readme.md",readTemplate,(err)=>{
        if (err) {
            console.log (err)
        }
        console.log ("success")
    })
}
/* const writeToFile=(fileName, data) => {}
const writeToFile=(fileName, data) => console.log() */

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        writeToFile(answers)
    })
}

// Function call to initialize app
init();
