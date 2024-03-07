'use strict'

// Practice exercise 9.3
// Select a page element and update the content, change the style, and add attributes.
// Create an HTML file containing a page element with a class of output using the
// following code template: 
// Within the script tags, make the following changes to the output element:
// 1. Select the page element as a JavaScript object.
// 2. Update the textContent property of the selected page element.
// 3. Using the classList.add object method, add a class of red to the element.
// 4. Update the id property of the element to tester.
// 5. Through the style object, add a backgroundColor property of red to the page
// element.
// . Get the document URL via document.URL and update the text of the output
// element to contain the value of the document URL. You can log it in the
// console first to ensure you have the correct value.

let page = document.querySelector('.output');

page.textContent = "Hi There";
page.classList.add('.red');
page.id = 'tester';
page.style.backgroundColor = "red";
console.log(document.URL);
page.textContent = (decodeURI(document.URL))
