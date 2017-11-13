
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');
var inquirer = require('inquirer');

exports.letter;
exports.lives = 0;
exports.wordGuess;
exports.chosenWord = game.chooseWord();

exports.requestInfo = function(){
  if(exports.lives >= 10){
    console.log("GAME OVER!");
    exports.playAgain();
  }
  else{
    var questions = [
      {
    type: "list",
    name: "anOption",
    message: "PRESIDENTIAL HANGMAN! \nWhat do you want to guess?\n USED: "+exports.lives+" of 10.",
    choices:[
    "letter",
    "word"]
      }
  ];

  inquirer.prompt(questions).then(function(answers){

    if(answers.anOption == "letter"){
      var letterGuess = [
      {
        type: "input",
        name: "letter",
        message: "Chosen Already: "+word.letterArr+"\nCurrent Guess: "
      }
      ];

      inquirer.prompt(letterGuess).then(function(answers){
        exports.letter = answers.letter;
        word.checked();
      })
    }

    else if(answers.anOption == "word"){
      var wordGuess = [
      {
        type: "input",
        name: "word",
        message: "Which word?"
      }
      ];
      inquirer.prompt(wordGuess).then(function(answers){
        exports.wordGuess = answers.word;
        word.checkWord();
      })
    }

    else{
      console.log("INCORRECT!");
      exports.requestInfo();
    }
  })
  }

};

exports.playAgain = function(){
  var questions = [
  {
    type: "list",
    name: "playAgain",
    message: "Another round?",
    choices:[
    "yes",
    "no"
    ]
  }
  ];

  inquirer.prompt(questions).then(function(answer){
    if(answer.playAgain == "yes"){
      exports.lives = 0;
      exports.chosenWord = game.chooseWord();
      letter.guessArray = [];
      letter.wordArray = [];
      word.letterArray = [];
      letter.initDisplay();
      letter.displayWord();
      exports.requestInfo();
    }
    else{
      console.log("Let's play again soon!");
    }
  });
}

exports.requestInfo();
letter.displayWord();
letter.initDisplay();

