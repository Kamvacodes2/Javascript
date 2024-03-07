'use strict'


//The BOM
// browser object model or window browser object
// makes it possible for your javascript code to communicate with the browser

// Objects of BOM INCLUDE
// History
//Navigator
//Location


//The DOM the way of displaying HTML structure as a logical tree!
// e.g getElementById
// console.dir(window)
//contains document info
//or console.dir(document)


/**
 * ! HTML -> HEAD ->TITLE
 * ? HTML -> body -> h1
 * ? HTML -> body -> div -> p and a
 */


//ACCESS THE DOM IN A WEB BROWSER: console.dir(document);


/**
 * ! Selecting page elements
 * ? To select page elements to use within your JavaScript code and in order to
* ? manipulate elements, you can use either the querySelector() or querySelectorAll()
* ? method. Both of these can be used to select page elements either by tag name, ID, or
* ? class.
 */

// The document.querySelector() returns the first element within the document that matches 
// the specified selector

// The document.querySelector() will return the first element within the
// document that matches the specified selectors
/**
 * ! f no matching page elements are found, the result null is returned.
 * ! document.querySelectorAll().
 * ? The querySelectorAll() method will return a static NodeList
 * ? which represents a list of the document's elements that match the specified group of selectors.
 */

/**
 * !  to select multiple elements, you can use querySelectorAll()
 * ? method is going to return all the elements that match the selector in an array.
 */