const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions for your project:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines for your project:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions for your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },

];

// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`README file generated as ${fileName}`);
      }
    });
  }

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    });
  }

// function call to initialize program
init();
