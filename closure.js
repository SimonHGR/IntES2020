"use strict";

// function getAdder() {
//     return (a, b) => a + b;
// }

// function getAdderOfTwelve() {
//     return (a) => a + 12;
// }

// const add = getAdder();
// console.log(add(3, 4));
// console.log(add(2, 9));
//
// const add12 = getAdderOfTwelve();
// console.log(add12(12));

function getAddSomeAmount(a) {
    const p = 99;
    return b => a + b;
}

const add9 = getAddSomeAmount(9);
const add10 = getAddSomeAmount(10);

console.log("3 add9 " + add9(3));
console.log("3 add10 " + add10(3));