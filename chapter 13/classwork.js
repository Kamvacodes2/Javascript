'use strict'

// ? Introducing concurrency

// Concurrency is whenever things are happening "at the same time" or in parallel.
//? Computers and applications multi-task

// There are three strategies in JavaScript that you'll need to know of when working
// with concurrency: "callbacks", "Promises", and the "async and await keywords".

// ? Callbacks

// . It is just a function that takes another function as an argument, which is
// then called when the rest of the initial function has finished.

// function doSomething(callback) {
//     callback();
// }
// function sayHi() {
//     console.log("Hi!");
// }
// doSomething(sayHi);

//! Example 2

function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}

function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            console.log(score);
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    callback(grade);
}

getGrade(85, judge);


// SET INTERVAL FOR ANIMATIONS OR LOOPS 
// Some JavaScript built-in functions work with this callback principle, for example,
// the setTimeOut() and setInterval() functions. They will take a function that is
// executed after a certain time in the case of a timeout and every certain amount of
// time for the specified interval.

// let loop = setInterval(encourage, 500);
// let i = 0;

// function encourage() {
//     if (i < 12) {
//         console.log("You're doing great, keep going!");
//     } else {
//         clearInterval(loop);
//     }
//     i++
// }


// ? Promises

// When we create a Promise, we give it a function
// we create a function on the spot!
// So, inside the argument list we are defining the function, often done using arrow functions as well.
// This function needs two parameters, and these parameters are callbacks.
// We have called them resolve and reject here.


// When resolve() is called, the Promise is presumed to be successful and whatever
// is between the arrows is returned and used as input for the then method on the
// Promise object. If reject() is called, the Promise failed and the catch() method
// on the Promise object (if present) is executed with the argument of the reject()
// function.

let promise = new Promise(function (resolve, reject) {
    let x = 20;
    if (x > 10) {
        resolve(x); // on success
    } else {
        reject("Too low"); // on error
    }
});

promise.then(
    function (value) {
        console.log("Success:", value);
    },
    function (error) {
        console.log("Error:", error);
    }
);


// When creating a Promise, we don't know what the value
// of the Promise is going to be. This value is whatever is sent as an argument to the
// resolve function. It is a sort of placeholder.

// when we call then on the Promise, we basically say: figure out what the value
// of the Promise is, and when you know, execute one function if the Promise was
// resolved or a different function if it was rejected. When a Promise is neither resolved
// nor rejected, we say that the Promise is pending.

// then() is a Promise itself, so when it returns we can use the result for the next then()
// instance. This means we can chain the then() instances, which can look like this:

const promise1 = new Promise((resolve, reject) => {
    resolve("success!");
})
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })


// async and await

// We have just seen the Promise syntax. With the async keyword, we can make a
// function return a Promise. This makes the Promises nicer to read and look a lot like
// synchronous (non-concurrent) code. We can use this Promise just like we learned in
// the previous section, or we can use the more powerful await keyword to wait until
// the Promise is done. await only works in an asynchronous function.

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something" + x);
        }, 2000);
    });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);


// ? Event loop

// JavaScript is a single-threaded language. 
// ? . A thread in this context means a path of execution. 

// If there is only a single path, this means that
// tasks will have to wait for one another and only one thing can happen at a time.

// This single executor is the event loop. It's a process that executes the actual work. 


// Call stack and callback queue

// JavaScript works with a call stack, and all the actions that it has to execute are
//queued up here.

// The event loop is a process that is constantly monitoring this call
// stack, and whenever there are tasks to do, the event loop does them one by one. The
// tasks on top get executed first.


console.log("Hi there");
add(4, 5);
function add(x, y) {
    return x + y;
}

// or

console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1000);
console.log(add(4, 5));


// Whats happening well, the console.log and add functions go into the call stack which takes priority
// the call stack queue is actioned first one by one and only once the call stack have been completed
// the setTimeout goes into what is called the call back queue and that takes second priority.
// all tasks in the call back queue are completed one by one as well.