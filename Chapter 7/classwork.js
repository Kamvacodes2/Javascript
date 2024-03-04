'use strict'

/**
 * ! Object-oriented programming
 * ! 
 * ? Classes have constructors these act as the function
 */

class Dog {
    constructor(name, breed, weight, color) {
        this.name = name
        this.breed = breed
        this.weight = weight
        this.color = color
    }
}

let dog1 = new Dog('James', 'rotweiller', '20kgs', 'black and white')
// console.log(dog1);

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


class Cars {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed
    }

    accelerate(amount) {
        this.currentSpeed += amount;
    };
};


/**
*! Keeping properties private by adding a #
*? This procedure is called encapsulation
*/

// class Woman {
//     #name;
//     #lastname;
//     constructor(name, lastname = 'Smith') {
//         this.#name = name;
//         this.#lastname = lastname;


//     };

//     greet() {
//         console.log('Hello there ' + this.#name);
//     };

//     compliment(name, object) {
//         return this.#name + ` thinks that your ${object} is beautiful ${name}`
//     }
// };

// let person2 = new Woman("Jane", "Apple")

class Woman {
    constructor(name, lastname = 'Smith') {
        this.name = name;
        this.lastname = lastname;


    };

    greet() {
        console.log('Hello there ' + this.name);
    };

    compliment(name, object) {
        return this.name + ` thinks that your ${object} is beautiful ${name}`
    }
};

let person2 = new Woman("Jane", "Apple")



// print(person2.name)
// print(person2.greet());
// print(person2.compliment("Sarah", "shirt"));

/**
*! 
*? Validating data using if
*/

class Man {
    #name;
    #lastname;
    constructor(name, lastname = 'Smith') {
        name.length > 1 ? this.#name = name : alert('The first name must be greater than 1 letter');
        lastname.length > 1 ? this.#lastname = lastname : alert('The last name must be greate than 1 letter!');
    };

    get firstname() {
        return this.#name;
    }

    set firstname(name) {
        name.length > 1 ? this.#name = name : alert('The first name must be greater than 1 letter');
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        lastname.length > 1 ? this.#lastname = lastname : alert('The first name must be greater than 1 letter');
    }

    greet() {
        console.log('Hello there ' + this.#name);
    };

    compliment(name, object) {
        return this.#name + ` thinks that your ${object} is beautiful ${name}`
    }
};

let man1 = new Man('James', 'Donny')
print(man1);
print(man1.lastname)
/**
*! GETTER METHOD code edited above
*? SETTER METHOD
*/



/**
*! inheritance we use extend to show the connection to the parent company
*? inheritance we make use of "super" to call the inherited info from the parent
*/

class Car {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed
    }

    accelerate(amount) {
        this.currentSpeed += amount;
    };
};

class Motor extends Car {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    doWheelie() {
        print('riding on one wheel!')
    }
}


let bmw = new Motor('red', 80, 300, 'petrol')
bmw.doWheelie()


/**
*! Protoype
*? 
*/

Woman.prototype.introduce = function () {
    console.log("Hi, I'm", this.name);
};


person2.introduce();