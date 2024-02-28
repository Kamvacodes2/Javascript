'use strict'

// Practice exercise 4.5 
// 1. Create a variable called prize and use a prompt to ask the user to set the 
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My 
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back 
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable 
// strings and the output message string

let prize = prompt('Set the value of the prize by picking a number between 0 and 10');
prize = parseInt(prize);
let message = "My Select: "

switch(prize) {
    case 0:
        prize= "Bronze"
        console.log(message + prize);
        break;
    
    case 1:
        prize = "Silver"
        console.log(message + prize);
        break;
    
    case 2:
        prize = "Gold"
        console.log(message + prize);
        break;

    case 3:
    case 4:
        prize = "Platinum"
        console.log(message + prize);
        break;
    
    case 5:
        prize = "Copper"
        console.log(message + prize);
        break;
    
    case 6:
    case 7:
        prize = "Aluminium"
        console.log(message + prize);
        break;
    default:
        prize = "Unlucky no prize for you"
        console.log(message + prize);
        break
}