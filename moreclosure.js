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

const roster = [
    new Student("Fred", 3.2, ["Math", "Physics"], "Science"),
    new Student("Jim", 2.2, ["Journalism"]),
    new Student("Julian", 3.8, ["Biology"]),
    new Student("Sheila", 3.9, ["Math", "Physics", "Quantum Mechanics", "Astrophysics"], "Engineering"),
];

function getEnthusiasmCriterion(threshold) {
    return s => s.courses.length > threshold;
}

// const enthusiasticStudent = s => s.courses.length > 1;
const enthusiasticStudent = getEnthusiasmCriterion(1);
const smartStudent = s => s.gpa > 3.5;

function and(crit1, crit2) {
    return item => crit1(item) && crit2(item);
}

// find all smart, enthusiastic students..
const smartAndEnthustiastic = and(enthusiasticStudent, smartStudent);
roster
    // .filter(enthusiasticStudent)
    // .filter(smartStudent)
    .filter(smartAndEnthustiastic)
    .forEach(s => console.log(s));
