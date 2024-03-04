'use strict'

// Practice exercise 7.2
// Get your friend's full name:
// 1. Using the Person class from Practice exercise 7.1, add a method called
// fullname, which returns the concatenated value of firstname and lastname
// when invoked.
// 2. Create values for person1 and person2 using two friends' first and last names.
// 3. Using the fullname method within the class, return the full name of one or
// both people.

let print = (...x) => console.log(...x)

class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    fullname() {
        return this.#firstname + " " + this.#lastname;
    }
};

let person1 = new Person('Lisa', 'Ngwenya')
let person2 = new Person('Tumelo', 'Mohale')

print(person1.fullname());
