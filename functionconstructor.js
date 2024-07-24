"use strict";

function Student(name, gpa, courses, major) {
    // validity checks here!!
    this.name = name;
    this.gpa = gpa;
    this.courses = courses;
    this.major = major;
    this.toString = function() {
        console.log(this);
        return `I'm a Student called ${this.name}, with grade ${this.gpa}`;
    }
}

function add(a, b) {
    if (typeof this !== "undefined") {
        this.fruit = "Banana!";
    }
    return a + b; // what is this function, is is a constructor/initializer, or a function?
}

// const name = "Fred";
// const first = name.at(0); // inside definition of "at" prefix (name) becomes "this"

const s1 = new Student("Fred", 3.7, ["Math", "Physics"], "Math"); // make and initialize a new object of type Student
console.log(s1)
// "new" takes a FUNCTION, it first creates an empty object,
// then passes that object, as "this" into that function
// the (primary) purpose of the function is to initialize that object

const add1 = new add(1, 2); // really odd, but syntactically valid!
console.log(typeof add1)
console.log(add1)

const sum = add(2, 3);
console.log(sum);

// const descr = s1.toString();
const descr = "representation is " + s1; // toString is called automatically
console.log(descr);

// function renderAsText() {
//     console.log("In renderAsText()");
//     let msg = "As text: ";
//     for (const key in this) {
//         msg += key + ":" + this[key] + ", ";
//     }
//     return msg;
// }

// this gets a "lexical this" in other words, they DO NOT pick up
// "this" from the invocation, they use "this" from the surrounding code...
const renderAsText = () => {
    console.log("In renderAsText()");
    let msg = "As text: ";
    for (const key in this) {
        msg += key + ":" + this[key] + ", ";
    }
    return msg;
}

s1.rat = renderAsText;
console.log(s1);
console.log(s1.rat());

function sayHello() {
    console.log("Bwahahahaha! Gotcha");
    return "I don't know!";
}

s1.toString = sayHello;
console.log(s1.toString());

// const thing = {
//     name: "Fred",
//     address: "over here",
//     credit: 99
// };
//
// for (const key in thing) {
//     console.log("key is " + key + " value is " + thing[key]);
// }

// DANGER, DANGER!!! what you get depends on how this was configured/run
// in a browser, I get the "window" object
// in ordinary strict mode, I typically get the global object

console.log(global);
console.log(this); // file scope object

// badVariable = "Uh oh, here we go!"
this.badVariable = "Uh oh, here we go!"

console.log(this);
console.log(global.badVariable);

console.log(s1.rat());

console.log(s1 instanceof Student);

Student.MAX_STUDENT_COUNT = 1000;
console.log(Student);

console.log(Student.MAX_STUDENT_COUNT);
const s2 = new Student("Jim", 2.2, ["Journalis"]);
console.log(s2 instanceof Student);