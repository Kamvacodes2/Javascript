'use strict'

// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation 
// that the user is a friend if the name selected is known in the case statements. You 
// can add a default response that you don't know the person if it's an unknown name. 
// Output the result into the console.

let enterName = prompt('Please enter a name: ')
let outPutMessage;

switch (enterName) {
    case "Tumelo":
        outPutMessage = `Yes I know ${enterName}, he is the homie`;
        console.log(outPutMessage);
        break;
    
    case 'Sandile':
        outPutMessage = `I know ${enterName} he is a good friend `;
        console.log(outPutMessage);
        break;

    case 'David':
        outPutMessage = `I know ${enterName} `;
        console.log(outPutMessage);
        break;
    
    case 'Lisa':
        outPutMessage = `I am good friends with ${enterName}`
        console.log(outPutMessage);
        break;

    default:
        outPutMessage = `I don't know anyone by that name`
        console.log(outPutMessage);
        break;
};