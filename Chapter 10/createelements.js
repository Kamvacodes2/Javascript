'use strict'

// Creating new elements

let el = document.createElement("p");
el.innerText = Math.floor(Math.random() * 100);
document.body.appendChild(el);

// It creates an element of type p (paragraph). through the createElement('p') method;
// Upon creation, you need to specify what type of HTML
// element you would want to create, which in this case is a p

// as innerText, it is adding a random number.

// Next, it is adding the element as a new last child of the body.

// You could also add it to another element; just select the
// element you want to add it to and use the appendChild() method.