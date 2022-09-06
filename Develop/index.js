//neeeded packeges
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")



function init() {        
//question arrays accesed with inquierers
const questions=[
  {
    type: "input",
    name: "title",
    message: "What is the title of project?",
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("Please enter project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "mail",
    message: "What is your mail adress?",
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("Please add  mail adress!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "repository",
    message: "What is your Github repository name?",
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("Please add repository!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Add description for your project!",
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("Please add description for project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "future",
    message: "How can you improve this project in future?",
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("Dont forget to dream for future!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "learn",
    message: "What did you learn?",
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("Didnt you learn anything!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    message: "what kind of interfaces are used",
    name: "UI",
    choices: [
      "Graphical UI",
      "Command line Interface",
      "Menu-driven IU",
      "Touch UI",
    ],
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("You need to mark some of them!");
        return false;
      }
    },
  },
  {
    type: "list",
    message: "Does your project have a license?",
    name: "license",
    choices: [
      "mit",
      "agpl-3.0",
      "apache-2.0",
      "bsd-2-clause",
      "bsd-3-clause",
      "bsl-1.0",
      "cc0-1.0",
      "epl-2.0",
      "gpl-2.0",
      "gpl-3.0",
      "lgpl-2.1",
      "mpl-2.0",
    ],
    validate: (answers) => {
      if (answers) {
        return true;

      } else {
       
        return false;
      }
    },
  },
]
inquirer
.prompt(questions)
.then(answers => {
  console.log(JSON.stringify(answers, null, 2))
})
  .catch((error) => {
    if (error.ans) {
      console.log("Your console environment is not supported!")
    } else {
      console.log(error)
    }})

  }
  


init();

module.exports = generateMarkdown;
