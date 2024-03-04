'use strict'

// Practice exercise 7.3
// Create a class that contains properties for different animal species and the sound that
// each species makes, and create two (or more) animals:
// 1. Create a method that prints a given animal and its sound.
// 2. Add a prototype with another action for the animal.
// 3. Output an entire animal object into the console.

let print = (...x) => console.log(...x)

class Animals {
    // #species;
    // #sound; 
    constructor(species,sound) {
        this.species = species;
        this.sound = sound;
    }

    // get species() {
    //     return this.#species;
    // }

    // get sound(){
    //     return this.#sound;
    // }

    animalFAQ() {
        print(`${this.species}  ${this.sound} `)
    };

};

Animals.prototype.run = function () {
    return `The ${this.species} is running`
}

let animal1 = new Animals('Pig','Oink');
let animal2 = new Animals('Cat', 'Meow');

// animal2.animalFAQ();

print(animal1.run());