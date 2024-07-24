"use strict";

const prot = {
    name: "Unknown",
    toString: function () {
        return `Name is ${this.name} count is ${this.count ?? "Not specified"}`;
    }
}

function Person() {

}

Person.prototype = prot;

const p1 = new Person();
console.log(p1.name);
console.log(p1.toString());

p1.name = "Freddy";
console.log(p1.name);
console.log(p1.toString());

const p2 = new Person();
p2.name = "Matt";
console.log(p2.name);
console.log(p2.toString());
// p2.toString = function() {
//     return `I'm ${this.name}, I'm special!!!!`;
// }
console.log(p2.name);
console.log(p2.toString());
Object.getPrototypeOf(p2).toString = function() {
    return `I'm ${this.name}, I'm special!!!!`;
}

console.log(p1.toString());
console.log(p2.toString());

Object.getPrototypeOf([]).showMeEverything = function() {
    console.log("all my elements:")
    this.forEach(x => console.log(x));
    console.log("that's all folks!!!");
}


const names = ["Fred", "Jim", "Sheila"];
names.showMeEverything();


