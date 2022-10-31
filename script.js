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
  ])
  .then((answers) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
</head>
<body>
    <header class="header">${answers.name}</header>
    <p class="description">${answers.description}</p>
    <h1 class="Installation">Installation</h1>
    <p class="description">${answers.installation}</p>
    <h2 class="usage">Usage</h2>
    <p class="description">${answers.usage}</p>
    <h3 class="contribution">Contribution Guidelines</h3>
    <p class="description">${answers.contribution}</p>
</body>
</html>`
fs.writeFile('answers.html', html, (err) =>
err ? console.error(err) : console.log('Success!')
);
  });