'use strict'

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called 
// friends.
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console

let people = {friends: []};

console.log(people)

let friend1 = {
    "first-name": "James",
    "last-name": 'Peeples',
    ID: 12458
}

let friend2 = {
    "first-name": "Lisa",
    "last-name": 'Olives',
    ID: 12468
}

let friend3 = {
    "first-name": "Tumelo",
    "last-name": 'Mogane',
    ID: 12488
}

people["friends"] = [friend1, friend2, friend3]

console.log(people)

