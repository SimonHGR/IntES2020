"use strict";

// use promises to print three messages:
// after 2 seconds print "msg1"
// after ANOTHER 2 seconds "msg2"
// after A FURTHER 3 seconds "msg3"

// then reorder to msg1, msg3, msg2.

function printAfterDelay(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                const result = "The message is: " + msg;
                console.log("sending result: " + result);
                resolve(result);
            } else {
                reject("Uh oh, it broke: " + msg);
            }
        }, delay);
    });
}

// printAfterDelay("Hello", 1000)
//     .then(s => s.toUpperCase(), e => {
//         console.log("uh oh!!! " + e);
//         return "Recovery message";
//     })
//     .then(s => printAfterDelay("Step 3: " + s, 2000))
//     .then(s => console.log("The final answer is " + s))
//     .catch(e => console.log("Dang it"));

async function doTheWork() {
    let msg2
    try {
        const msg1 = await printAfterDelay("Hello", 1000)
        msg2 = msg1.toUpperCase()
    } catch (e) {
        console.log("uh oh!!! " + e);
        msg2 =  "Recovery message";
    }

    try {
        const msg3 = await printAfterDelay("Step 3: " + msg2, 2000);
        console.log("The final answer is " + msg3);
    } catch(e) {
        console.log("Dang it")
    };
}


doTheWork();
console.log("point X");
// for (let i = 0; i < 5_000_000_000; i++) {}
// console.log("point Y");
