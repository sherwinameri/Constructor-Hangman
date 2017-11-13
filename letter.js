var main = require('./main.js');
var guessDisplay = "";
exports.guessArray = [];
exports.wordArray = [];

exports.initDisplay = function(){
  var wordChoice = main.chosenWord;
  for(var i = 0; i<wordChoice.length; i++){
    exports.wordArray.push(wordChoice.charAt(i));
    if(wordChoice.charAt(i) == '\xa0'){
      exports.guessArray.push('\xa0');
    }
    else{
    exports.guessArray.push('_');
    }
  };
}

exports.displayWord = function(){
  guessDisplay = "";
  for(var i = 0; i <exports.guessArray.length; i++){
    guessDisplay += exports.guessArray[i]+" ";
  }
  console.log(guessDisplay);
};

exports.editArray = function(position, letter){
  exports.guessArray[position] = letter;
};