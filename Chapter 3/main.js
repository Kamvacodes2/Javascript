'use strict'

//• Arrays and their properties
// • Array methods
// • Multidimensional arrays
// • Objects in JavaScript
// • Working with objects and arrays


// Creating arrays

let arr1 = new Array("purple", "green", "yellow");
let arr2 = ["black", "orange", "pink"];

console.log(arr1);
console.log(arr2);

let arr3 = new Array(10);
let arr4 = [10];

console.log(arr3);
console.log(arr4);

// JavaScript simply stores all the variables with their own data type and value in the array


// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]); // string
// console.log(typeof arr[1]); // number
// console.log(typeof arr[2]); // boolean

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);
// arr = ["nope, now you are overwriting the array"];

// The new value for the first element of the array is going fine, but you cannot assign 
// a new value to the full array. Here is what it will output

// TypeError: Assignment to constant variable.


// Accessing elements

let cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]); // Toyota


console.log(cars[1]); // Renault

console.log(cars[2]); // Volkswagen

console.log(cars[3]); // undefined
console.log(cars[-1]); //undefined


// Overwriting elements

cars[0] = "Tesla";
console.log(cars[0]); // Tesla

console.log(cars); //  Tesla, Renault , VW

cars[3] = "Kia";
cars[-1] = "Fiat";

console.log(cars[3]); //Kia
console.log(cars[-1]); // Fiat


// Built-in length property


let colors = ["black", "orange", "pink"]
let booleans = [true, false, false, true];
let emptyArray = [];


console.log("Length of colors:", colors.length); // 3
console.log("Length of booleans:", booleans.length); //4
console.log("Length of empty array:", emptyArray.length);// 0

let lastElement = colors[colors.length - 1];

console.log(lastElement);


// non-existent index 

let numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length); // 6
console.log(numbers) // [12, 24, 36, empty × 2, 48]


/**
* ? PRACTICE 3.1 DONE




// Array methods

// Adding and replacing elements

let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");

console.log(favoriteFruits) // ["grapefruit", "orange", "lemon", "tangerine"]
console.log(favoriteFruits.length); // 4

let lengthOfFavoriteFruits = favoriteFruits.push("lime"); // 5
console.log(lengthOfFavoriteFruits)// 5 the value 5 gets stored in the lengthOfFavoriteFruitsVariable


// SPLICE 

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes); 

/**
 * ! ANSWER = ["circle", "triangle", "square", "trapezoid", "rectangle", "pentagon"]
 **/


arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes); // THE LAST TWO ITEMS ARE DELETED AND THESE TWO REPLACE THEM

/**
 * ! ANSWER =  ['circle', 'triangle', 'square', 'trapezoid']
 * ? It would have replaced the elements rectangle and pentagon and added square and 
* ? trapezoid in their place, as follows:
 **/


arrOfShapes.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes);


/** If you were to increase the second parameter to a number higher than our array, it 
would not affect the result as JavaScript would simply stop as soon as it runs out of 
values to delete.
 * ! ANSWER = ["circle", "triangle", "square", "trapezoid",]
 **/

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7); // This way, you can create a new array that consists of a concatenation of both 
// arrays.


/**
 * ? [1, 2, 3, 4, 5, 6]
 **/


let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

/**
 * ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
 **/


// Deleting elements

arr8.pop();
console.log(arr8); // Removes the last element of an array

/**
 * ? [1, 2, 3, 4, 5, 6, 7, 8]
 **/

// Deleting the first element can be done with shift()

arr8.shift();
console.log(arr8); 


/**
 * ? [2, 3, 4, 5, 6, 7, 8]
 **/


arr8.splice(1, 3); // the first 1 will specify which index to start deleting and the 3 will specify
// how many numbers to remove

console.log(arr8)

/**
 * ? [2, 6, 7, 8]
 **/


//delete. This is not a method, but you can use it 
// to change the value of a certain position of the array to undefined

delete arr8[0];
console.log(arr8) // the length remains the same  unlike splice the element is not removed but 
//stored as an empty placeholder that can be changed later on
/**
 * ? [ <1 empty item>, 6, 7, 8 ]
 **/



// Finding elements 
//  to check whether a value is present in an array, you can use the find() method.

arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2); // 6 and undefined


/**
 * ? findValue = 6
 * ? findValue2 = undefined
 **/


// INDEX OF 

// indexOf() method. This method returns the index on which the value is found.

arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2); // 1, -1


/** So, the first one will return 1 since that is the index position of 6 in the array. The 
second one will return -1 because the array does not contain 10
 * ? findIndex = 1
 * ? findIndex2 = undefined
 * ! the correct answer for findIndex2 =  -1 
 * ! If a value occurs in an array more than once, 
* ! it will return the first occurrence. If the value is not found, it will return -1:
 **/


arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);

/** to find the next occurrence of the specified number, you can add a 
second argument to indexOf(), specifying from which position it should start 
searching:
 * ? findIndex3 = -1 
 * there is no second occurance of 6 in the array
 **/ 


// The last occurrence can also be found. This is done with the lastIndexOf() method:
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");

console.log(lastDog);

/**
 * ? lastDog  = 4
 * 
 **/

// Sorting
// sorts numbers from small to high and strings A-Z


let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);


/**
 * ? names = ["Alicia", "Bert",Fatiha", "James", "Maria" ]
 * 
 **/

let ages = [18, 72, 33, 56, 40];
ages.sort();

console.log(ages);

/**
 * ? ages = [18, 33, 40, 56, 72]
 * 
 **/


// Reversing
// The elements of the array can be reversed by calling the built-in method, reverse(), 
// on an array.

// It puts the last element first, and the first element last


names.reverse()
console.log(names);

/**
 * ? names = [ 'Maria', 'James', 'Fatiha', 'Bert', 'Alicia' ]
 * 
 **/

/** 
* ! Practice exercise 3.2 DONE
**/

// Multidimensional arrays
// It sounds complicated, but it is just an array of 
// arrays: a list of lists:

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];

// we can create an array of already existing arrays. This is called a two-dimensional 
// array

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/**
 * ! to access elements of the inner arrays, you will have to specify an index twice: 
 */

console.log(arrOfArrays2[0][1])

/**
 * ! answer = 2
 */

let value2 = arrOfArrays[2][2];

console.log(value2);

/**
 * ! answer = 9
 */

arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];

// pdf pg 85




















