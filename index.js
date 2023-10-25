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
        name:"motivation",
        message:"What was your motivation?"
    },
    {
        type:"input",
        name:"why",
        message:"Why did you build this project?"
    },
    {
        type:"input",
        name:"problem",
        message:"What problem does it solve?"
    },
    {
        type:"input",
        name:"learn",
        message:"What did you learn?"
    },
    {
        type:"input",
        name:"steps",
        message:"What are the stepts to install the README generation Mark Down File?, type all instructions here"
    },
    {
        type:"list",
        name:"license",
        message:"Choose a license",
        choices:["MIT","Apache","Gnu","None"]
    },
    {
        type:"input",
        name:"usage",
        message:"what are the uses for this application"
    },
    {
        type:"input",
        name:"github",
        message:"Please enter Github username"
    },
    {
        type:"input",
        name:"email",
        message:"Please enter email address"
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
        // console.log("display bp")
        writeToFile(answers)
    })
}

// Function call to initialize app
init();
