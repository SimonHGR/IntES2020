"use strict";

const human = {
    name: "unknown",
    job: "enjoy the beauty around you!",
};

console.log(human);

const albert = Object.create(human);

console.log(albert);
console.log(albert.name);
console.log(albert.job);

albert.name = "Albert";
