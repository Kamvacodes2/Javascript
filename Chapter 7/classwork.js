'use strict'

/**
 * ! Object-oriented programming
 * ! 
 * ? Classes have constructors these act as the function
 */

class Dog {
    constructor(name,breed, weight, color) {
        this.name = name
        this.breed = breed
        this.weight = weight
        this.color = color
    }
}

let dog1 = new Dog('James','rotweiller', '20kgs','black and white')
console.log(dog1);

/**
 * ! Object-oriented programming
 * ! 
 * ? Classes have constructors these act as the function
 * ! Example 2;
 */


/**
*! Methods
*/


let print = (...x) => console.log(...x);

// class Person {
//     constructor(name, surname = 'Smith') {
//         this.name = name;
//         this.surname = surname;


//     };

//     greet() {
//         console.log('Hello there ' + this.name);
//     };

//     compliment(name, object) {
//       return  this.name + ` thinks that your ${object} is beautiful ${name}`
//     }
// };

// let person1 = new Person("Jane", "Apple")

// print(person1.greet());
// print(person1.compliment("Sarah", "shirt"));

/**
*! Example 2 method
*/


class Cars{
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed
    }

    accelerate(amount) {
        this.currentSpeed +=amount;
    };
};


/**
*! Keeping properties private by adding a #
*/

class Woman{
    #name;
    #surname;
    constructor(name, surname = 'Smith') {
        this.#name = name;
        this.#surname = surname;


    };

    greet() {
        console.log('Hello there ' + this.#name);
    };

    compliment(name, object) {
      return  this.#name + ` thinks that your ${object} is beautiful ${name}`
    }
};

let person2 = new Woman("Jane", "Apple")

print(person2.greet());
print(person2.compliment("Sarah", "shirt"));

