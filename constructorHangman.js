// var letters = require('./letters.js');
// var words = require('./words.js');
var inquirer = require('inquirer');

console.log("Beer Hangman!");
console.log("You have 10 guesses.  Guess a letter by using your keyboard.");
console.log("Good luck!");

// global vars
var wordBank = ["budweiser", "pale ale", "octoberfest", "hard cider", "stout", "lager",
  "pilsner", "sour", "porter", "saison", "amber"
];
var wins = 0;
var currentWord;
var guessesRemaining = 10;

function reset() {
  guessesRemaining = 10;
}

function startGame() {
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  // console.log(currentWord);

}

startGame();
