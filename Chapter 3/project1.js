'use strict'

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];


// Manipulate your array using various methods, such as pop(), push(), shift(), and 
// unshift(), and transform it into the following:

/** 
* !["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
*/

// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.

console.log(theList);
theList.pop();
console.log(theList);
theList.shift()
console.log(theList);

theList.unshift("FIRST");
console.log(theList);

theList.splice(3, 4, 'hello world');
console.log(theList)

theList.splice(2,1, 'MIDDLE');
theList.push('LAST')
console.log(theList)


