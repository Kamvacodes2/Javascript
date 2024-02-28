'use strict'

// Logic Statements

/**
 * • if and if else statements
• else if statements
• Conditional ternary operators
• switch statements
 */

// if and if else statements

// if *some condition is true*, then *a certain action will happen*, else *another action will happen* 

let rain = true;
if(rain){
 console.log("** Taking my umbrella when I need to go outside **");
} else {
 console.log("** I can leave my umbrella at home **");
}

/**
 * Whatever is between these parantheses 
will be translated to a Boolean. If the value of this Boolean is true, it will execute the 
block of code associated with if
 */

let expression = true
if(expression) {
    // code associated with the if block
    // will only be executed if the expression is true
   } else {
    // code associated with the else block
    // we don't need an else block, it is optional
    // this code will only be executed if the expression is false
   };   
// break

let age = 24;
if(age < 18) {
    console.log("We're very sorry, but you can't get in under 18");
   } else {
    console.log("Welcome!");
   };



let hobby = "dancing";
if(hobby === "coding"){
    console.log("** I love coding too! **");
   } else {
    console.log("** Can you teach me that? **");
   }


/**
 * ! Practice exercise 4.1 pdf page 98 COME BACK AND DO!!!
 */

// else if statements

let age1 = 10;
let cost = 0;
let message;
if (age1 < 3) {
 cost = 0;
 message = "Access is free under three.";
} else if (age1 >= 3 && age1 < 12) {
 cost = 5;
 message ="With the child discount, the fee is 5 dollars";
} else if (age1 >= 12 && age1 < 65) {
 cost = 10;
 message ="A regular ticket costs 10 dollars.";
 } else {
    cost = 7;
    message ="A ticket is 7 dollars.";
   }
   console.log(message);
   console.log("Your Total cost "+cost);

/** 
 * The code gets executed top to bottom, and only one of the blocks will be executed. 
As soon as a true expression is encountered, the other ones will be ignored. This is 
why we can also write our sample like this:
 */

age = 66;
if(age < 3){
    console.log("Access is free under three.");
   } else if(age < 12) {
    console.log("With the child discount, the fee is 5 dollars");
   } else if(age < 65) {
    console.log("A regular ticket costs 10 dollars.");
   } else if(age >= 65) {
    console.log("A ticket is 7 dollars.");
   }


/**
 * ! Practice exercise 4.2 pdf page 100 COME BACK AND DO!!!!!!!!!!!!!!!!!!!
**/


// Conditional ternary operators

// operand1 ? operand2 : operand3;

/** 
 * operand1 is the expression that is to be evaluated. If the value of the expression is 
true, operand2 gets executed. If the value of the expression is false, operand3 gets 
executed. You can read the question mark as "then" and the colon as "else" here:
 */

// expression ? statement for true : statement associated with false;

age = 19
let access = age < 18 ? "denied" : "allowed";

console.log(age);
console.log(access);



/**
 * ! Practice exercise 4.3 pdf page 101 COME BACK AND DO!!!!!!!!!!!!!!!!!!!
 */



// switch statements

// if(activity === "Get up") {
//     console.log("It is 6:30AM");
//    } else if(activity === "Breakfast") {
//     console.log("It is 7:00AM");
//    } else if(activity === "Drive to work") {
//     console.log("It is 8:00AM");
//    } else if(activity === "Lunch") {
//     console.log("It is 12.00PM");
//    } else if(activity === "Drive home") {
//     console.log("It is 5:00PM")
//    } else if(activity === "Dinner") {
//     console.log("It is 6:30PM");
//    } 

// convert to switch function

let activity = " ";


// switch (activity) {
//     case 'Get up': 
//     console.log("It is 6:30AM")
//         break;

//     case 'Breakfast': 
//     console.log("It is 7:00AM")
//         break;

//     case "Drive to work":
//         console.log("It is 8:00AM")
//         break;
    
//     case "Lunch": 
//         console.log("It is 12.00PM")
//         break;
    
//     case 'Drive home':
//         console.log("It is 5:00PM")
//         break;
    
//     case 'Dinner':
//         console.log("It is 6:30PM")
//         break;
// }


// switch(expression) {
//  case value1:
    // code to be executed
//     break;
//     case value2:
    // code to be executed
//     break;
//     case value-n:
    // code to be executed
//     break;
//    }


// The default case

//  This works a lot like the else part of an if else statement. 
// If it does not find a match with any of the cases and a default case is present, then 
// it will execute the code associated with the default case.

/** 
*! switch(expression) {
    case value1:
    *! code to be executed
    break;
    case value2:
    *! code to be executed
    break;
    case value-n:
    *! code to be executed
    break;
    default:
    *! code to be executed when no cases match
    break;
   }
 */

switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("I cannot determine the current time.");
        break;
};
   

/**
 * ! Practice exercise 4.4 pdf page 105 COME BACK AND DO!!!!!!!!!!!
 */


// Combining cases

let grade ="A"
switch(grade){
    case "F":
    case "D":
    console.log("You've failed!");
    break;
    case "C":
    case "B":
    console.log("You've passed!");
    break;
    case "A":
    console.log("Nice!");
    break;
    default:
    console.log("I don't know this grade.");
   }
   
/**
*! Practice exercise 4.5 pdf page 107  COME BACK AND DO!!!!!!!!!!!
*/