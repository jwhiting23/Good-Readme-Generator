// TODO: Include packages needed for this application JW
const { error } = require('console');
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

console.log('Hello! Time to create a README.md file for your project!');

// TODO: Create an array of questions for user input JW
const questions = [
    {
        type: "input",
        name: 'title',
        message:'Please enter the title of your project.',
    },
    {
        type: "checkbox",
        name: 'license',
        choices: ['Apache License 2.0', 'GNU Public License v3.0', 'Open Software License 3.0', 'MIT', 'Mozilla Public License 2.0'],
        message:'Please enter the license you wish to use.',
    },
    {
        type: "input",
        name: 'description',
        message:'Please enter a description of your project.',
    },
    {
        type: "input",
        name: 'installation',
        message:'Please enter how to install this application.',
    },
    {
        type: "input",
        name: 'usage',
        message:'How do you use this application?',
    },
    {
        type: "input",
        name: 'contributing',
        message:'Who contributed to making this project?',
    },
    {
        type: "input",
        name: 'tests',
        message:'How do you test this project and enter the project tests.',
    },
    {
        type: "input",
        name: 'questions',
        message:'Who should be emailed for questions regarding this project and how it was developed?',
    },
    {
        type: "input",
        name: 'githubUsername',
        message:'Please enter your GitHub Username',
    },
    {
        type: "input",
        name: 'repo',
        message:'Plese enter your repository link.',
    },
];

// TODO: Create a function to write README file JW
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        return console.error(err);
      };
    
      console.log("New README file created with success!");
    });

}

// TODO: Create a function to initialize app JW
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data);
        }).catch(function (err) {
            console.error(err)
        })    
}

init();
