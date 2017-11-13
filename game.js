
var presidents = ["bush", "obama","reagan", "carter", "roosevelt", "washington", "jefferson", "lincoln", "ford",
    "nixon", "jackson", "johnson", "kennedy", "trump", "clinton", "eisenhower", "adams", "truman",
    "wilson"];

exports.chooseWord = function(){
  var randoNum = Math.floor((Math.random()*presidents.length)+1);
  return presidents[randoNum];
}