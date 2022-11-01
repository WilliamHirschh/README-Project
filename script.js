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
      {
        type: 'input',
        message: 'What license are you using?',
        name: 'license',
      },
  ])
  .then((answers) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>README</title>
</head>
<body>
    <header class="header">${answers.name}</header>
    <header class="Descript">Description</header>
    <p class="description">${answers.description}</p>
    <header class="tableofcontents">Table of Contents </header>
    <div class="quicklinks">
    <a href=".Installation" class="links">Installation</a>
    <a href=".usage" class="links">Usage</a>
    <a href=".contribution" class="links">Contribution Guidelines</a>
    <a href=".test" class="links">Test Instructions</a>
    <a href=".questions" class="links">Questions</a>
    <a href=".license" class="links">License</a>
    </div>
    <h1 class="Installation">Installation</h1>
    <p class="description">${answers.installation}</p>
    <h2 class="usage">Usage</h2>
    <p class="description">${answers.usage}</p>
    <h3 class="contribution">Contribution Guidelines</h3>
    <p class="description">${answers.contribution}</p>
    <h4 class="test">Test Instructions</h4>
    <p class="description">${answers.test}</p>
    <h5 class="questions">Questions</h5>
    <p class="description">${answers.GitHub, answers.email} <br>WilliamHirschh</p>
    <h6 class="license">license</h6>
    <p class="LicenseFiller">${answers.license}</p>
    <img class="img" src="MIT.png">
</body>
</html>`
fs.writeFile('answers.html', html, (err) =>
err ? console.error(err) : console.log('Success!')
);
  });