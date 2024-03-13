'use strict'

let theCounter = 0;


function timeOut(x) {
    return new Promise(resolve => {
        setTimeout(()=>{
            theCounter++;
            resolve(`x value ${x} counter: ${theCounter}`)
        }, 1000)
    })
}


async function callFunc(x) {
    console.log(`ready ${x} counter: ${theCounter}`)
    let call1 = await timeOut(x)
    console.log(call1)
}

for (let i = 1; i < 4; i++) {
    callFunc(i);
}



