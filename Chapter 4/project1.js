'use strict'

// Ask the user to enter a number and check whether it's greater than, equal to, or less 
// than a dynamic number value in your code. Output the result to the user.

let userNum = prompt('Enter a number between 0 - 20');
userNum = parseInt(userNum);
let dynamicNumber = Math.floor(Math.random()*20);

let outputMessage;

if (userNum > dynamicNumber) {
    outputMessage = `${userNum} is greater than the dynamic number ${dynamicNumber}`;
} else if (userNum === dynamicNumber) {
    outputMessage = `${userNum} is equal to dynamic number ${dynamicNumber}`;
} else {
    outputMessage = `${userNum} is less than the dynamic number ${dynamicNumber}`;
};

console.log(outputMessage)