"use strict";

const names = ["Fred", "Jim", "Sheila"];

// let idx = 0;
// while (idx < names.length) {
//     console.log("item " + idx + " is " + names[idx]);
//     idx++;
// }

for (let idx = 0; idx < names.length; idx++) {
    // console.log("item " + idx + " is " + names[idx]);
    console.log("item is " + names[idx]);
}

for (const item of names) {
    console.log(">> " + item);
}

for (const c of "Hello") {
    console.log(c);
}

for (const k in names) {
    console.log("k is " + k);
}
console.log("------------------");
names["banana"] = "fruit";
names[1000] = "big";
names[-20] = "odd";
console.log("names.length is " + names.length);
for (const k in names) {
    console.log("k is " + k + " and value is " + names[k]);
}

