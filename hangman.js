// JS

var inquirer = require('inquirer') ;

function Word(){

}

function Letter(){

}

var userGuessesLeft ;













inquirer
  .prompt([
  {
    type: "input",
    message: "What is your first name?",
    name: "username",
  },
  {
    type: "list",
    message: "Which female star do you like the most?",
    choices: ["Shakira","Beyonce","Rihanna","Katy Perry"],
    name: "singer",
  },
  {
    type: "password",
    message: "Set your password:",
    name: "password",
    default: true
  },
  {
    type: "checkbox",
    message: "Which female star do you like the most?",
    choices: ["Shakira","Beyonce","Rihanna","Katy Perry"],
    name: "singer",
  },
  {
    type: "confirm",
    message: "Are you sure?",
    name: "confirm",
    default: true
  },

    ])

