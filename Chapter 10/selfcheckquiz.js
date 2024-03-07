'use strict'

/**
 * ? What output will the following code produce?
// The code replaces the text content of the <div> element with the id output using the innerText property. 
// It sets the text to "Hello <br> World". However, innerText interprets its input as plain text, 
// so the <br> tag is treated 
// as part of the text and not as an HTML line break. Therefore, the output will be: "Hello <br> World".

/**
 * ! What output will be seen within the browser page?
 */


// In this code snippet, the innerHTML property is used to set the HTML content of the
//  <div> element with the id output. It sets the HTML to "Hello <br> World". 
//  Since innerHTML interprets its input as HTML, the <br> tag will be treated as an HTML line break. 
//  Therefore, the output will be:
/**
* ! Hello
* ! World
 */

/**
 * ! What will be seen in the input field from the following code?
 */

// The code retrieves the content of the <div> element with the id output using innerHTML and 
// then sets the value of the input field with id val to this content. Initially, the content of the 
// <div> is "Hello World", so the value of the input field will be set to "Hello World".


/**
 * ? In the following code, what is output into the console when the element with
 * ? the word three gets clicked? What is the output when the element with the
 * ? word one gets clicked?
 */

// In this HTML structure, clicking on the element containing the word "three" 
// will trigger the output() function with the argument 'three'. 
// Therefore, the output in the console will be 'three'. 
// Similarly, clicking on the element containing the word "one" will trigger the output() 
// function with the argument 'one', resulting in the output 'one'.


/**
 * ? 5. What line of code needs to be added to remove the event listener when the
 * ? button is clicked in the following code?
 */


// To remove the event listener when the button is clicked, you can use the removeEventListener() method. 
// However, since the myFun function is anonymous and not named, you cannot directly remove it. 
// Therefore, you need to assign a named function to the event listener and then remove it