'use strict'

// Employee tracking app
// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values in the
// constructor.
// 2. Create two or more people with values for their first names, last names, and
// the number of years they've worked at the company. Add the people into an
// array.
// 3. Set up a prototype to return the details of the person's first and last names
// and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding
// some text to make the output a full sentence.

print = (...x) => console.log(...x);

class Employees {
    // #firstname;
    // #lastname;
    // #years;
    constructor(firstname, lastname, years) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.years = years;
    }

    // get firstname() {
    //     return this.#firstname;
    // }

    // get lastname() {
    //     return this.#lastname;
    // }
 
}

let employee1 = new Employees('Jack', 'Moyo', 3);
let employee2 = new Employees('Lindi','Shaw', 6);

let employeeList = [employee1,employee2];

Employees.prototype.details = function() {
    return this.firstname + " " + this.lastname + ' has worked here for ' + this.years + ' years';
}


employeeList.forEach((item) => {
    print(item.details())
});