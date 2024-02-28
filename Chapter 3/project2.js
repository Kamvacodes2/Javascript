'use strict'

// Company product catalog
// In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and 
// quantity.
// 3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data 
// structure.

let productInventory = [];

let item1 = {
    name: "Mac Book",
    model: "X-500",
    cost: "$1200",
    quantity: 50
}

let item2 = {
    name: "HP",
    model: "X-P7500",
    cost: "$800",
    quantity: 80
}

let item3 = {
    name: "Linux",
    model: "A-455",
    cost: "$200",
    quantity: 40
}

productInventory.push(item1, item2, item3);
// productInventory.splice(0, 0, item2, item3); alernative way to add code

console.log(productInventory);

let thirdItemQuantity = productInventory[2]['quantity']
console.log(thirdItemQuantity)