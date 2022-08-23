const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of project?'
    },
    {
        type: 'input',
        name: 'mail',
        message: 'What is your mail adress?'
      },
    {
        type: 'input',
        name: 'repository',
        message: 'What is your Github repository name?'
      },
    {
        type: 'input',
        name: 'description',
        message: 'Add description for your project!'
      },
      {
        type: 'input',
        name: 'future',
        message: 'How can you improve this project in future?'
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?'
      },
    {
      type: 'checkbox',
      message: 'what kind of interfaces are used',
      name: 'stack',
      choices: ['Graphical UI', 'Command line Interface', 'Menu-driven IU', 'Touch UI']
    },
    {
      type: 'list',
      message: 'Does your project have a license?',
      name: 'license',
      choices: ['license1', 'licens2', 'license3']
    }
  ])
  .then(data => {
    const filename = `${data.name
      .toLowerCase()
      .split(' ')
      .join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
      err ? console.log(err) : console.log('Success!')
    );
  });