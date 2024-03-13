'use strict'
// let text = "I love Javascript"
// console.log(text.match(/javascript/i));

// let texts = "I love React and JavaScript!";
// console.log(texts.match(/javascript|nodejs|react/gi));


// let text = 'd';
// console.log(text.match(/[a-z]/));

// let tex = 'T';
// console.log(tex.match(/[a-z]/i))

// let newText = '9'
// console.log(newText.match(/[a-zA-Z0-9]/))

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));

// FIND SPECIAL CHARACTCERS WE USE A DOT

// g looks for all matches and gives you back everything in a list
let text = "Just some text.";
console.log(text.match(/./g));

'if you are specifically looking for one character use the escape \ sign as shown below'
console.log(text.match(/\./g));



let newSentence = "I'm 29 years old";
console.log(newSentence.match(/\d/g));


// to find the spaces in a sentences;

// let dex = "Coding is a lot of fun!";
// console.log(dex.match(/\s/g));




// escape bin 

let tn = "In the end or at the beginning?";
console.log(tn.match(/\bin/gi));

// Groups

let txt = "I love JavaScript!";
console.log(txt.match(/(love|dislike|hate)\s(javascript|spiders)/gi));


// let tet = "123123123";
// console.log(tet.match(/(123)+/)); // this is looking for a 123 that occurs multiple times the plus means 1 - many times

// /(123)*a/

let string1 = "123123123a"
console.log(string1.match(/(123)*a/)) //looking for 123 any number of times which represents the *  (0 - many times) with the letter a


let str = "abcabcabc";
console.log(str.match(/(abc){1,2}/)); // its finding the abc either once or twice hence the {1, 2} the min and max essentially


let test = "I love JavaScript!";
console.log(test.match(/(?<language>javascript)/i));

// ? Searching and replacing strings

let texxt = "That's not the case.";
console.log(texxt.search(/Case/i)); // this tells you that it finds at the first letter index hence 15


let text1 = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text1.replace("Coding", "JavaScript")); // this replaces the first instance of the word 


let text2 = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text2.replace(/Coding/g, "JavaScript")); // this replaces all instances of the word;




// ? Email validation

// Here are the five parts explained:
// 1. name: One or more alphanumerical characters, underscores, dashes, or dots
// 2. @: Literal character
// 3. domain: One or more alphanumerical characters, underscores, dashes, or dots
// 4. .: Literal dot
// 5. extension: One or more alphanumerical characters, underscores, dashes, or
// dots


// So, let's do the steps for regex:
// 1. [a-zA-Z0-9._-]+
// 2. @
// 3. [a-zA-Z0-9._-]+
// 4. \. (remember, the dot is a special character in regex, so we need to escape it)
// 5. [a-zA-Z0-9._-]+

let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike@mail@.com";
console.log(validEmail.match(emailPattern));
console.log(invalidEmail.match(emailPattern));




// ? Functions and the arguments object

// function test(a, b, c) {
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

// if you eliminate the function arguments we can still access them using arguments like this

function tesst() {
    console.log("first:", arguments[0]);
    console.log("second:", arguments[1]);
    console.log("third:", arguments[2]);
}
tesst("fun", "js", "secrets");



//?  JavaScript hoisting

// var x;
// x = 5;
// console.log(x);

x = 5;
console.log(x);
var x; // if we use let it isn't a global variable and results in an error


// Using strict mode

function sayHi() {
    let greeting = "Hello!";
    console.log(greeting); // without 'use strict' this will be callled and work perfectly
    // if we do add 'use strict' we have to use let greeting = 'Hello' for it to work.
}
sayHi();


// Error handling
//? if you suspect a piece of code to result in an error;

try {
    somethingVeryDangerous();
} catch (e) {
    if (e instanceof TypeError) {
        // deal with TypeError exceptions
    } else if (e instanceof RangeError) {
        console.log('Range Error')
        // deal with RangeError exceptions
    } else if (e instanceof EvalError) {
        // deal with EvalError exceptions
    } else {
        //deal with all other exceptions
        throw e; //rethrow
    }
}

// You can do one more thing with a try catch block, and that is add a finally block.
// This finally block gets executed irrespective ofwhether errors are thrown. This is
// great for cleanup purposes.

try {
    trySomething();
} catch (e) {
    console.log("Oh oh");
} finally {
    console.log("Error or no error, I will be logged!");
}

function somethingVeryDangerous(num) {
    if (num > 100) {
        throw RangeError();
    } 
 }


