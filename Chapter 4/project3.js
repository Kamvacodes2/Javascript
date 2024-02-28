'use strict'
// This is a game between a player and the computer, where both will make a random 
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
// Scissors will beat out Paper. You can use JavaScript to create your own version of 
// this game, applying the logic with an if statement. Since this project is a little more 
// difficult

let optionList = ['Rock', 'Paper', 'Scissors']
let playerChoice = Math.floor(Math.random() * optionList.length);
let computerChoice = Math.floor(Math.random() * optionList.length);
// let playerChoice = 2 
// let computerChoice = 2
let compShoot = optionList[computerChoice];
let playerShoot = optionList[[playerChoice]]
let outCome;
let choices;

if (playerChoice === 0 && computerChoice ===1) {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${compShoot} beats ${playerShoot}`;
} else if (playerChoice === computerChoice && computerChoice === playerChoice) {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${compShoot} and ${playerShoot} nullify each other, Try Again!`
} else if (computerChoice === 0 && playerChoice === 1) {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${playerShoot} beats ${compShoot}`;
} else if (playerChoice === 0 && (computerChoice === 2)) {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${playerShoot} beats ${compShoot}`;
} else if (computerChoice === 0 && (playerChoice === 2)) {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${compShoot} beats ${playerShoot}`;
} else if (computerChoice === 1 && playerChoice === 2) {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${playerShoot} beats ${compShoot}`
} else if (playerChoice === 0 && computerChoice === 0) {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${compShoot} and ${playerShoot} nullify each other, Try Again!`
}else {
    choices = `player chose ${playerShoot} and the computer chose ${compShoot}`
    outCome = `${compShoot} beats ${playerShoot}`
}
console.log(choices)
console.log(outCome)