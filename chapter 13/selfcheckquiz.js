'use strict'


function addOne(val) {
    return val + 1;
}

let myPromise = new Promise((resolve, reject) => {
    let run = true
    if (run) {
        resolve('');
    }
})



function total(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}






