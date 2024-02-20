import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user
const questions = [
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your project name?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Please write a short description of your project',
                name: 'Description',
            },
        
            {
                type: 'list',
                message: 'What kind of license should your project have?',
                name: 'License',
                choices: [
                    "MIT", 
                    "Apache_2.0", 
                    "GPLv3.0", 
                    "BSD_3-Clause", 
                    "None"
                ],
            },
            {
                type: 'input',
                message: 'What command should be run to install dependencies?',
                default: "npm i",
                name: 'Installation',
            },
            {
                type: 'input',
                message: 'What command should be run to run tests?',
                default: "npm test",
                name: 'Tests',
            },
            {
                type: 'input',
                message: 'What does the user need to know about using the repo?',
                name: 'Usage',
            },
            {
                type: 'input',
                message: 'What does the user need to know about contributing to the repo?',
                name: 'Contributing',
            },
        ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
        console.log("Your README.md file has been successfully created!")
    }
})};

// function to initialize program
function init() {
    console.log("Welcome to the README Generator, please answer the questions below to produce your README file");
    inquirer.prompt(questions)
    .then(data => writeToFile('README.md', generateMarkdown(data)))
}

// function call to initialize program
init();
