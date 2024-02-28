'use strict'

// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:

let shoppingList = ['Milk','Bread', 'Apples'];
shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);
let removeLast = shoppingList.pop();
console.log(removeLast);
shoppingList = shoppingList.sort();
console.log(shoppingList);
let listIndex = shoppingList.indexOf('Milk')
console.log(listIndex);
shoppingList.splice(1,0, "Carrots", "Lettuce");
console.log(shoppingList);
let newList = ["Juice", "Pop"]
const newShoppingList = shoppingList.concat(newList,newList);
console.log(newShoppingList);
let lastIndexNew = newShoppingList.lastIndexOf('Pop')
console.log(lastIndexNew)
console.log(newShoppingList)


