'use strict'

// Practice exercise 8.6
// Experiment with the Math object with these steps:
// 1. Output the value of PI into the console using Math.
// 2. Using Math get the ceil() value of 5.7, get the floor() value of 5.7, get the
// round value of 5.7, and output it into the console.
// 3. Output a random value into the console.
// 4. Use Math.floor() and Math.random() to get a number from 0 to 10.
// 5. Use Math.floor() and Math.random() to get a number from 1 to 10.
// 6. Use Math.floor() and Math.random() to get a number from 1 to 100.
// 7. Create a function to generate a random number using the parameters of min
// and max. Run that function 100 times, returning into the console a random
// number from 1 to 100 each time.

console.log(Math.PI)

let ceilNum = 5.7;
let floorNum = 5.7;
let roundNum = 5.7;

ceilNum = Math.ceil(ceilNum);
floorNum = Math.floor(floorNum);
roundNum = Math.round(roundNum);
// console.log(ceilNum);
// console.log(floorNum);
// console.log(roundNum);

// console.log(Math.floor(Math.random()*23));

let num1 = Math.floor(Math.random()*11);
let num2 = Math.floor(Math.random()*10) + 1;
let num3 = Math.floor(Math.random()*100) + 1;


function randomMinMax(min, max) {
    return Math.floor(Math.random()*(max - min)) + 1;
};


for(let i = 0; i < 100; i++) {
    console.log(randomMinMax(1, 100));
}
