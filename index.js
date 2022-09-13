//neeeded packeges
const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./generateREADME.UI")
const badge = require("./utils/License");




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
    name: "ui",
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
  badge(answers.license)
console.log(badge(answers.license))

creatReadme=`
 ${badge(answers.license) }


 ## Table of Content
- [Installation](#description)
- [Future](#future)
- [Learn](#learn)
- [Interface](#ui)
- [Mail](#mail)
- [Repository](#repository)

##  - Title of project: 
### ${answers.title}


## - Demo Link: https://www.youtube.com/watch?v=FdOXanoMi7Y


##  - Description: 
### ${answers.description}


##  - How can we improve this project ?!
      
### ${answers.future}


## - What did i learn: 

### ${answers.learn}

## - INTERFACE: 

### ${answers.ui}


## - LICENSE: 
### --${answers.license}--


## - My Contact Information

### E-mail: ${answers.mail}

### Repository: ${answers.repository}
`



  fs.writeFileSync("README.md",creatReadme)

})
  .catch((error) => {
    if (error.answers) {
      console.log("Your console environment is not supported!")
    } else {
      console.log(error)
    }})

  }
  


init();

module.exports = generateREADME;
