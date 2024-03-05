'use strict'

// Practice exercise 8.5
// Using the replace() string method, complete this vowel replacer exercise by
// replacing the vowels in a string with numbers. You can start with this string:

// start with this string : I love JavaScript

// retrun this : 2 l3v1 j0v0scr2pt

// Take the following steps:
// 1. Create the previously specified string, and convert it to lowercase.
// 2. Create an array containing the vowels: a, e, i, o, u.
// 3. Loop through each letter you have in the array, and output the current letter
// into the console so that you can see which letter will be converted.
// 4. Within the loop, using replaceAll() update each vowel substring with the
// index value of the letter from the vowel array.

let initialString = "I love JavaScript"
let lowCaseString = initialString.toLocaleLowerCase();

let vowelArr = ["a", "e", "i", "o", "u"];

let loopThru = vowelArr.forEach((letter) => {
    lowCaseString = lowCaseString.replaceAll(letter,  vowelArr.indexOf(letter))// i love javascript ; i = 2 l3v1 j0v0
});

console.log(lowCaseString)

