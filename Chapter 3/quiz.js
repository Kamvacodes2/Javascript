'use strict'

/** 1. Can you use const and update values within an array?
* ! No you cannot
2. Which property in an array gives the number of items contained in the array?
* ! the .length property
3. What is the output in the console?
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));

4. How do you replace the second element in an array myArr = 
[1,3,5,6,8,9,15] with the value 4?

5. What is the output in the console?

What is the output in the console?
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);

**/

const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0)); // 1
console.log(myArr1.indexOf(3)); // 6



// let myArr = [1,3,5,6,8,9,15]
// myArr[1] = 4
// console.log(myArr)


const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2); // empty spaces 10 times and then add test
console.log(myArr2[2]); // undefined


const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);// undefined




