"use strict";

function show() {
    console.log(typeof this);
    console.log(this);
    for (const k in this) {
        console.log(`key ${k} -> ${this[k]}`);
    }
    console.log("--------------------")
}

const arrowShow = () => {
    console.log(typeof this);
    console.log(this);
    for (const k in this) {
        console.log(`key ${k} -> ${this[k]}`);
    }
    console.log("--------------------")
}

this.fruit = "banana";
console.log(this);
show();
arrowShow();

const thing = {
    name: "A thing",
    count: 100,
    operation: show,
    operation2: arrowShow,
    getPrinter: function() {
        console.log("in getPrinter call, this.name is " + this.name);
        // const self = this;
        // return function() {
        //     // console.log(this.name);
        //     console.log(self.name);
        // };
        return () => console.log(this.name);
    }
};

// thing.operation();
// thing.operation2();


const p = thing.getPrinter();
p();


