'use strict'

// Practice exercise 8.2
// Remove duplicates from the array using filter() and indexOf(). The starting array
// is:
// ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Laurence", "Mike"]

// Take the following steps:
// 1. Create an array of names of people. Make sure you include duplicates. The
// exercise will remove the duplicate names.
// 2. Using the filter() method, assign the results of each item from the array as
// arguments within an anonymous function. Using the value, index, and array
// arguments, return the filtered result. You can set the return value to true
// temporarily as this will build the new array with all the results in the original
// array.
// 3. Add a console.log call within the function that will output the index value
// of the current item in the array. Also add the value so you can see the results
// of the item value that has the current index number and the first matching
// result from the array's index value.
// 4. Using indexOf() the current value returns the index value of the item
// and applies the condition to check to see if it matches the original index
// value. This condition will only be true on the first result so all subsequent
// duplicates will be false and not get added to the new array. false will not
// return the value into the new array. The duplicates will all be false since the
// indexof() only gets the first match in the array.
// 5. Output the new, unique value array onto the console.

let duplicateList = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"]


// for (let i = 0; i < duplicateList.length; i++) {
//     let duplicate = false
//     for (let p = 0; p < list1.length; p++) {
//         if (duplicateList[i] === list1[p]) {
//             duplicate = true;
//             break;
//         }
//     }
//     if (!duplicate) {
//         list1.push(duplicateList[i])
//     }
// }

 let filteredList = duplicateList.filter((element,index,arr) => { //instructions for each item in list
    console.log(element, index, arr.indexOf(element)) // Laurence 0 0, Mike 1 1, Larry 2 2, Laurence 5 0
    return arr.indexOf(element)  === index; // this is working as an if condition 
});

console.log(filteredList);

// 1 duplicateList.filter(...) is saying, 
// "Hey, let's go through each name in the list called duplicateList and do something with them."
// 2 (element,index,arr) => { ... } is like a little instruction for each name. 
// It's saying, "For each name, do the following:"
// 3 console.log(element, index, arr.indexOf(element)) is telling the computer 
// to print out three things: the name itself (element), the position of the name in the list (index), 
// and where the first occurrence of the name is in the list (arr.indexOf(element)).
// 4 return arr.indexOf(element) === index; is like a test. It's saying, 
// "If the position of the name in the list is the same as where we found it first, then keep it. 
// Otherwise, leave it out."
// Finally, console.log(filteredList) prints out the new list of names after we've done all these tests.

// So, in simpler terms, the program is looking at all the names, 
// keeping only the first time each name appears, and then printing out the new list without any repeats.

