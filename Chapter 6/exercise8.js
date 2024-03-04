'use strict'

// Practice exercise 6.8
// 1. Set a variable name and assign a function to it. Create a function expression 
// with one parameter that outputs a provided argument to the console.
// 2. Pass an argument into the function.
// 3. Create the same function as a normal function declaration.


let theSky = (description) => console.log(description);

function theColorOfTheSky(describe) {
    console.log(describe);
}

theSky('The sky is blue');

theColorOfTheSky('The sky is orange')