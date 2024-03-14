'use strict'

function greet(fullName) {
     console.log(`Hello there ${fullName[0]} ${fullName[1]}`)
}

function twoFuncs(name, callback) {
    let emptyList = name.split(' ');
    callback(emptyList);
};

twoFuncs('Nkayallo Khuboni',greet);

