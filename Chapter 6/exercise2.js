'use strict'

// Practice exercise 6.2
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array
// value.
// 5. Invoke the function.

let descriptiveWords = ["beautiful", "majestic", "serene", "vibrant", "magnificent", "enchanting", "tranquil", "exquisite", "captivating", "splendid"];

let nameDescriber = () => {
    let userName = prompt(`Please enter a name: `)
    let rIndex = Math.floor(Math.random()*descriptiveWords.length);
    alert(` ${userName} is a really ${descriptiveWords[rIndex]} name`);
}

nameDescriber();