"use strict";

class Student {
    constructor(name, gpa, courses, major) {
        // should validate...
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
        this.major = major;
    }

    toString() {
        return `Student: name=${this.name}, gpa=${this.gpa}, courses=${this.courses}`;
    }
}

// function showAllStudents(roster) {
function showAll(roster) {
    for (const s of roster) {
        console.log("> " + s);
    }
}

// function operation(item) {
//     print it??
// }
// doWithAll becomes "forEach"
function doWithAll(items, operation) {
    for (const item of items) {
        operation(item);
    }
}

// let threshold = 3.0; // kinda "Strategy" pattern

// passing as an argument is kinda "Command" pattern
// function showAllSmnarStudents(roster, threshold) {
//     for (const s of roster) {
//         if (s.gpa > threshold) {
//             console.log("- " + s);
//         }
//     }
// }
//
// function showAllEnthusiaticStudents(roster, threshold) {
//     for (const s of roster) {
//         if (s.courses.length > threshold) {
//             console.log("++ " + s);
//         }
//     }
// }

// function showStudentsByCriterion(roster, criterion) {
// function filterAndPrint(roster, criterion) {
//     for (const s of roster) {
//         if (criterion(s)) {
//             console.log("++ " + s);
//         }
//     }
// }

function filter(roster, criterion) {
    const rv = [];
    for (const s of roster) {
        if (criterion(s)) {
            rv.push(s);
        }
    }
    return rv;
}

// function (student) -> boolean


// function(item) -> result
// bucket + operation => new bucket of results "Functor"
function map(items, operation) {
    const rv = [];
    for (const item of items) {
        const output = operation(item);
        rv.push(output);
    }
    return rv;
}

// operation produces an iterable (e.g. array) of items, not just one)
// this is the essential operation of a monad
function mapAndFlatten(items, operation) {
    const rv = [];
    for (const item of items) {
        const resArray = operation(item);
        for (const item2 of resArray) {
            rv.push(item2);
        }
    }
    return rv;
}


const roster = [
    new Student("Fred", 3.2, ["Math", "Physics"], "Science"),
    new Student("Jim", 2.2, ["Journalism"]),
    new Student("Julian", 3.8, ["Biology"]),
    new Student("Sheila", 3.9, ["Math", "Physics", "Quantum Mechanics", "Astrophysics"], "Engineering"),
];

// console.log("all:")
// showAllStudents(roster);
// console.log("fairly smart (3.0+):")
// showAllSmnarStudents(roster, 3.0);
// console.log("really smart (3.5+):")
// // threshold = 3.5;
// showAllSmnarStudents(roster, 3.5);
// console.log("enthusiastic students:")
// showAllEnthusiaticStudents(roster, 1);console.log("all:")
// showAllStudents(roster);
// console.log("fairly smart (3.0+):")
// showAllSmnarStudents(roster, 3.0);
// console.log("really smart (3.5+):")
// // threshold = 3.5;
// showAllSmnarStudents(roster, 3.5);
// console.log("enthusiastic students:")
// showAllEnthusiaticStudents(roster, 1);

function isSmartStudent(student) {
    return student.gpa > 3.5;
}

const test = isSmartStudent;

const fS = roster[0];
console.log(fS);

console.log(test(fS));
console.log(test(roster[3]));
console.log("--------------------")
// filterAndPrint(roster, test);
showAll(filter(roster, test));

function isEnthusiastic(student) {
    return student.courses.length > 1;
}

console.log("--------------------")
// filterAndPrint(roster, isEnthusiastic);
showAll(filter(roster, isEnthusiastic));

const names = ["Fred", "Jim", "Sheila"];
// filterAndPrint(names, function(s) { return s.length > 3; });
// filterAndPrint(names, s =>  s.length > 3);
doWithAll(filter(names, s => s.length > 3), i => console.log("Item is: " + i));
console.log("------------------------")
names.filter(s => s.length > 3).forEach(i => console.log("Item is: " + i));
// take smart students, produce messages like "Fred, who is smart takes 3 courses"

doWithAll(
    map(
        filter(roster, s => s.gpa > 3.5),
        s => `${s.name}, who is smart, takes ${s.courses.length} courses`),
    st => console.log(st));
console.log("------------------------")
roster
    .filter(s => s.gpa > 3.5)
    .map(s => `${s.name}, who is smart, takes ${s.courses.length} courses`)
    .forEach(s => console.log(s));

console.log("------------------------")
doWithAll(
    mapAndFlatten(roster, s => s.courses),
    st => console.log(st));

console.log("------------------------")
roster
    .filter(s => s.gpa > 3.5)
    .flatMap(s => s.courses)
    .forEach(s => console.log(s));

