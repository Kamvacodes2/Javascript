'use strict'

let allowedPasswrds = ['kittens', 'luckyman', 'greatkeys'];

function login(attempt) {
    let loggedIn = allowedPasswrds.includes(attempt); // true or false
    return new Promise((resolve, reject) => {
      if (loggedIn) {
        resolve({status: true});
      } else if(!loggedIn) {
        reject({status: false})
      }
    })
}


function passwordCheck(attempt) {
  let x = login(attempt).then(attempt => {
    if (attempt) {
        console.log('the password is correct!');
    }
  }).catch(attempt => {
    console.log(`Unfortunately that is incorrect!`)
  });
  
  
}

passwordCheck('greatkeys');