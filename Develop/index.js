//neeeded packeges
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

//question arrays accesed with inquierers
const question=[
  {
    type: "input",
    name: "title",
    message: "What is the title of project?",
    validate: (titleInput) => {
      if (titleInput) {
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
    validate: (mailInput) => {
      if (mailInput) {
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
    validate: (repoInput) => {
      if (repoInput) {
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
    validate: (descInput) => {
      if (descInput) {
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
    validate: (futureInput) => {
      if (futureInput) {
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
    validate: (learnInput) => {
      if (learnInput) {
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
    validate: (interfaceCheckbox) => {
      if (interfaceCheckbox) {
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
    validate: (licenseList) => {
      if (licenseList) {
        return true;
      } else {
        console.log("Good Call");
        return false;
      }
    },
  },
].then((data) => {
function writeReadme(filename,data){
  fs.writeFile(filename,data),(err) =>{
    if(err){
      return console.log(err)
    }
    console.log("success")
  }
}


});


// //initialize to file
// function init(){              ////////////////////
//     inquirer.prompt(questions)
//     .then(function(answer){
//         console.log(answer);
//         var fileContent=generateMarkdown({...answer});
//         fs.writeFile(fileContent)
//     }
    
    
//     )
// }
// // function call
// init();

// module.exports = generateMarkdown;
