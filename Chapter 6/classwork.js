'use strict'

// Practice exercise 6.1
// See if you can write a function for yourself. We want to write a function that adds 
// two numbers.
// 1. Create a function that takes two parameters, adds the parameters together, 
// and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using 
// console.log.
// 4. Create a second call to the function using two more numbers as arguments 
// sent to the function

// function hiThere() {
//     let you = prompt('What is your name ?:')
//     alert(`Hello ${you}`);
// }

// hiThere();

// function addNumbers(a, b) {

// }

/**
 * ! Classwork 2
 */
// let varContainingFunction = function() {
//     let varInFunction = "I'm in a function.";
//     console.log("hi there!", varInFunction);
//    };
//    varContainingFunction();

/**
 * ! Parameters and arguments
 */

// function tester(para1, para2) {
//     return para1 + " " + para2
// }

// const arg1 = "argument 1";
// const arg2 = "argument 2";
// alert(tester(arg1, arg2));

/**
 * ! Adding parameters
 */

function addTwoNumbers(x, y) {
    console.log(x + y);
   }

addTwoNumbers(2,2);

/**
 * ! console.log, push, and return set as variables do not return anything
 * !The code behind the push method adds to an array but returns the new length of the array not what
 * ! you actually pushed
 */

/**
 * !arrow functions 
 */

// (param1, param2) => body of the function

// Or for no parameters:
// () => body of the function;
// Or for one parameter (no parentheses are needed here):
// param => body of the function;
// Or for a multiline function with two parameters
//
/**
 * !arrow functions EXAPLES
 */
function doingStuff(x) {
    console.log(x);
   };

// variable function example

let doingStuffVar = function(x) {console.log(x)};

// arrow function example
let doingStuffArrow = (x) => console.log(x);

doingStuffArrow('Apples');

// arrow function example

let addNums = (x,y) => console.log(x+y)

addNums(2,8);


/**
 * !For each function 
 */

// const arr = ["squirrel", "alpaca", "buddy"]
// arr.forEach(x => console.log(x));


/**
 * !SPREAD OPERATOR
 */

// let firstArray = ["so", "much", "fun"];
// let newArray = ["JavaScript", "is", ...firstArray, "and", "very",
//  "powerful"];

// console.log(newArray);

/**
 * !SPREAD OPERATOR removes the values from the list into 2 comma seperated argumemnts
 */
let numArray = [10,5];
addNums(...numArray);


/**
 * ! REST PARAMETER, YOU CAN ONLY PUT THIS IN AT THE END OF THE PARAM BRACKETS 
 * ! THE PARAM 2 (REST PARAMETER BECOMES A LIST/ARRAY )
 */

// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
//    };

// someFunction("hi", "there!", "How are you?","Dentist");

/**
 * ! REST PARAMETER, YOU CAN ONLY PUT THIS IN AT THE END OF THE PARAM BRACKETS 
 * ! THE PARAM 2 (REST PARAMETER BECOMES A LIST/ARRAY ) EXAMPLES
 */

function sumFunction(...param) {
    let sum = 0
    for (let x of param) {
        sum += x
    }
   console.log(sum);
}

sumFunction(1,2,3,5,4,8,9,8,6,5,9,5,6,5,9,5);

/**
 * ! Returning function values  (if you have 2 statements you must you the return keyword
 * ! otherwise if it's one statement you don't need the curly object brackets
 */

// let result = addTwoNumbers(4, 5);
// console.log(result);


let addTwoNumber = (x,y) => x+y
// function addTwoNumbers(x, y) {
//     return x + y;
//    }

addTwoNumbers(5,7)


// let emptyArr = []

// for (let i =0; i < 10; i++) {
//     let result = addTwoNumber(i,2*i);
//     emptyArr.push(result);
// }

// console.log(emptyArr);



/**
 * ! Variable scope in functions 
 * ? where you can access a variable 
 */

/**
*? Local variables in functions (only exist while functiong is running)
*? Local variables are only in scope within the function they are defined. This is true
*?for let variables and var variables. There is a difference between them, which we
*?will touch upon here as well. The function parameters (they do not use let or var)
*?are also local variables
*/



/**
 * ! let versus var variables
 * ? let versus var variables
 */


// The difference between let and var is that var is function-scoped, which is the
// concept we described above. let is actually not function-scoped but block-scoped. A
// block is defined by two curly braces { }. The code within those braces is where let is
// still available


// if you have var within a function it can only be used within that function 
//  for example 

function apples() {
    if (true) {
        var a = 'apple sauce';
    }
    console.log(a);
};


// if you have var within a function it can only be used within that function 
//  and it will be accessible outside the loop

apples();

// if you have let within a function it can only be used within that block of and it won't be accessible
// outside of that block 
// for example

// function banna() {
//     if (true) {
//         let b = 'banana sauce';
//     }
//     console.log(b);
// };

// banna();

/**
 * ! This returns a not defined and becomes an Uncaught error
 */



/**
 * ? Immediately invoked function expression
 * ! To call function immediately
 * 
 */

( function () {
    if (true) {
        console.log('hello');
    }
})();


/**
 * ? Example 2
 * ! Immediately called
 * !The params must be empy
 * 
 */

(x => console.log('hello'))();



/**
 * ? Recursive Functions repeats or runs a function multiple times
 * 
 */

// function getRecursive(nr) {
//  console.log(nr);
//     if (nr > 0) {
//         getRecursive(--nr);  
//     }
// }
// getRecursive(3);

// function getRecurser(nr) {
//     console.log(`Started function:${nr}`);
//        if (nr > 0) {
//            getRecurser(--nr);  
//        } else {
//         console.log('done with recursion')
//        }
//        console.log(`Ended function: ${nr}`)
//    }
//    getRecurser(3);


/**
 * ! NESTED FUNCTIONS
 * 
 */

function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff() {
        console.log(nr + 7);
        console.log("I can access outer variables:", nr);
    }
}
doOuterFunctionStuff(5);

/**
 * ! The inner function has access to inner arguments but the outer function does not
 * ? a FUNCTION CREATED INSIDE OF ANOTHER FUNCTION CAN NOT BE CALLED ON ITS OWN 
 * i.e doInnerFunction() would result in an error!
 *  Function callbacks
 */

/**
 * ! Function callbacks!!!!!!!
 * 
 */

let functionVariable = function () {
    console.log("Not so secret though.");
   };

function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("Inside doFlexibleStuffFunction.");
}



let goodWork = x => console.log('Good job, keep it up');


setTimeout(doFlexibleStuff(goodWork), 1000)