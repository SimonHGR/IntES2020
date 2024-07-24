"use strict";

console.log("Hello...");
console.log(process.version);

// bad = 99; // Never do this!!!
{
    // console.log(bad);
    // var bad = 99; // function scope
    // let bad = 99;
    const bad = 99;
    console.log(bad);
    // bad = 100;
    // console.log(bad);

}
// console.log(bad);

const fred = {
    name: "Fred",
    gpa: 3.7,
    courses: ["Math", "Physics"],
    major: "Math"
};
console.log(fred);
// fred = {
//     name: "Frederick",
//     gpa: 3.7,
//     courses: ["Math", "Physics"],
//     major: "Math"
// };
// Object.seal(fred);
Object.freeze(fred);
fred.name = "Frederick";
console.log(fred);

Object.seal(fred);
// delete(fred.gpa); // fails when sealed
console.log(fred);

fred.name = "Freddy";
// fred.creditLimit = 99; // fails when sealed
console.log(fred);

// filter and forEach
const names = ["Fred", "Jim", "Shiela"];
console.log(names);
console.log("Fred".length);
console.log(names.filter(x => x.length > 4));
console.log(names);
names.forEach(x => console.log(x));

// objects in Javascript are essentially map structures
// -- probably use the newer Map class in modern code
const thing = {};
console.log(thing);
thing.x = 100;
console.log(thing);
thing["y"] = 200;
console.log(thing);
thing[99] = "ninety nine";
console.log(thing);
thing["^&@ really bad!"] = "no, don't";
console.log(thing);

