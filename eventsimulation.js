"use strict";

const workQueue = [];

const date = {day: 28, month: 2, year: 2023};

workQueue.push(() => {
    console.log("first work item!");
});
workQueue.push(() => {
    console.log("second work item!");
    date.day = 1; // at this point, date is invalid!
    date.month = 3; // now it's good again
    console.log("second work item finished!");
});
workQueue.push(() => {
    console.log("third work item!");
    console.log(`date is ${date.day}/${date.month}/${date.year} `);
    console.log("third work item finished!");
});
workQueue.push(() => {
    console.log("fourth work item!");
});

for (const w of workQueue) {
    w();
}
console.log("All work finished");
