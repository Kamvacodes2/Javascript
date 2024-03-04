'use strict'

print = (...x) => console.log(...x)
// Menu items price calculator
// Create a class which will allow you to work out the combined price of a number of
// items, and interact with it to work out the total cost of different orders.
// 1. Create a class that contains the prices of two menu items as private field
// declarations.
// 2. Use the constructor in the class to get the argument values (how many of
// each item are being bought).
// 3. Create a method to calculate and return the total cost depending on how
// many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation method.
// 5. Create two or three objects with different combinations of menu selections,
// and output the total cost in the console.

class Menu{
    #curry = 45;
    #pasta = 55;
    constructor(order1, order2) {
        this.order1 = order1;
        this.order2 = order2;
    }

    get total() {
        return "The total cost is R" + this.totalCost();
    }

    totalCost() {
        return (this.#curry * this.order1) + (this.#pasta * this.order2);
    }
}

let combo1 = new Menu(2,2);
let combo2 = new Menu(3,4);

print(combo1.total)
print(combo2.total)