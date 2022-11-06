class Mark {
    static generateReadme(answers){
        return `
# ${answers.name}

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Contributing](#contribution)
- [Installation](#installation)
- [Questions](#email)
- [License](#license)

## Description
${answers.description}

## Usage 
${answers.usage}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Questions
${answers.GitHub}
${answers.email}

## License
${answers.license}
        `
    }
}

module.exports = Mark