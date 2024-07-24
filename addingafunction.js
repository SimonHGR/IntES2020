"use strict";

const fred = {
    name: "fred",
    toString: function() {
        return `I'm a person called ${this.name}`;
    }
};

console.log(fred.toString());
fred.address = "Over the rainbow";

function oddball() {
    console.log("name is " + this?.name + " and address is " + this?.address);
}

oddball(); // not useful, but valid :)

fred.doStuff = oddball;
// fred.doStuff();
