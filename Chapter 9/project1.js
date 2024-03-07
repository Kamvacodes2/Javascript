'use strict';

// Manipulating HTML elements with JavaScript

// Take the following steps (and experiment further) to understand how HTML
// elements can be manipulated with JavaScript code.
// 1. Select the element with the class output.
// 2. Create another JavaScript object called mainList and select only the ul tag
// that is within the output element. Update the ID of that ul tag to mainList.
// 3. Search for the tagName of each div, and output them into the console as an
// array.
// 4. Using a for loop, set the ID of each of the div tags to id with a numeric value
// of the order they appear within output. Still within the loop, alternate the
// color of the contents of each element in output to be red or blue.

let outPut1 = document.querySelector('.output');
let mainList = document.querySelector('ul');
mainList.id = 'mainList';
let tagNameDivs = document.querySelectorAll('div',".tagName")
let tagNameArry = []
tagNameDivs.forEach(item => tagNameArry.push(item));
console.log(tagNameArry);

for (let i = 0; i < tagNameArry.length; i++) {
    tagNameArry[i].id = i
    if (i % 2 === 0) {
        tagNameArry[i].style.backgroundColor = 'red'
    } else {
        tagNameArry[i].style.backgroundColor = 'blue'
    }
};

console.log(tagNameArry[2])
