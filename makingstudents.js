"use strict";

function makeAStudent(name, gpa, courses, major) {
    if (typeof name === "undefined") throw new Error("name is required");
    // if (!gpa) throw new Error("gpa is required"); // fails with a valid zero gpa
    // if (!courses) throw new Error("courses is required"); // rejects null (might be correct)
    // if (typeof courses === "undefined") throw new Error("courses is required");
    const rv = {};
    rv.name = name;
    // rv.gpa = gpa ? gpa : 1.0; // very dodgy!!!
    // rv.gpa = gpa || 1.0; //  also bad
    rv.gpa = gpa ?? 1.0;

    // goal should be (generally) that all fields are always valid for any accessible object
    rv.courses = courses;
    rv.major = major;

    return rv;
}

let x = 99;
console.log(typeof x);
let y = {};
console.log(typeof y);
let z
console.log(typeof z);

if (x) console.log("It's not zero");

// const f = makeAStudent("fred", 2.2);
const f = makeAStudent("fred"); // gets the fallback
console.log(f)