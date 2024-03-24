'use strict'

let list1 = [{name: 'Felix', status: true}, {name: 'Kamva', status: false}, {name: 'Eddie', status: true} ];

const jsonformat = JSON.stringify(list1);
const obj1 = JSON.parse(jsonformat);

obj1.forEach(ele => {
    console.log(ele)
});

