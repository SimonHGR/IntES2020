"use strict";

const text = {
    name: "JavaScript"
};

console.log(process.version);
console.log("Hello " + text?.name + " " + (text?.world ?? "World!"));
