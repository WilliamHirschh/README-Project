const inquirer = require('inquirer');
const fs = require('fs');
const Mark = require('./readme');

const questions = [
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
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test',

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
    {
      type: 'input',
      message: 'What license are you using?',
      name: 'license',
    },
]

async function run() {
  return inquirer.prompt(questions)
  .then((answers) =>{
    const mark = Mark.generateReadme(answers)
    fs.writeFile('README.md', mark, function (err) {
      if (err) {
        console.log("error", err)
      } else {
        console.log("Sucess!!")
      }
       

        

      
    })
  })
  .catch((error)=>{
    console.log(error)
  })
}

run()