const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution guidelines',
      },
      {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test instructions',

      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',
      },
      {
        type: 'input',
        message: 'What is your email adress?',
        name: 'email',
      },
  ])