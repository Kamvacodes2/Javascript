'use strict'

let list1 = [{name: 'Felix', status: true}, {name: 'Kamva', status: false}, {name: 'Eddie', status: true} ]

reloader();
function reloader() {
    list1.forEach((element) => {
        console.log(element.name)
        console.log(element.status)
    })
}

