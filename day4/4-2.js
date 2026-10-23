function third() {
    console.log("Inside third()");
}

function second() {
    console.log("Before calling third()");
    third();
    console.log("After calling third()");
}

function first() {
    console.log("Before calling second()");
    second();
    console.log("After calling second()");
}

console.log("Start of script");
first();
console.log("End of script");

//task2

console.log("Message 1: Synchronous");

setTimeout(() => {
    console.log("Message 2: Asynchronous (setTimeout)");
}, 0);

console.log("Message 3: Synchronous");

//task3

console.log("A: Start");

setTimeout(() => {
    console.log("B: setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("C: Promise Microtask");
});

console.log("D: End");

//task4

console.log("Script start");

queueMicrotask(() => {
    console.log("Microtask 1 from queueMicrotask()");
});

Promise.resolve().then(() => {
    console.log("Microtask 2 from Promise.then()");
});

queueMicrotask(() => {
    console.log("Microtask 3 from queueMicrotask()");
});

console.log("Script end");

//task5

console.log("1. Script start");

setTimeout(() => {
    console.log("2. Timer callback start");

    Promise.resolve().then(() => {
        console.log("3. Promise inside timer callback");
    });

    console.log("4. Timer callback end");
}, 0);

console.log("5. Script end");

//task6

async function asyncTask() {
    console.log("1. Inside async function, before await");
    await Promise.resolve();
    console.log("2. Inside async function, after await");
}

console.log("3. Before calling async function");
asyncTask();
console.log("4. After calling async function");

//task7

console.log("Start");

setTimeout(() => {
    console.log("Timer callback executed!");
}, 1000);

// Simulate a heavy blocking loop (blocks for ~3 seconds)
const start = Date.now();
while (Date.now() - start < 3000) {
    // Do nothing, just block CPU
}

console.log("End of blocking loop");

//task8

/*+---------------------------------------------------------+
 |                      CALL STACK                         |
 |           (Executes synchronous code frames)            |
 +---------------------------------------------------------+
       ^                                              |
       | (Pushes tasks/microtasks)                    | (Offloads timers/I/O)
       |                                              v
+------------------+                          +------------------+
|   EVENT LOOP     |                          |   WEB / RUNTIME  |
|                  |                          |      APIs        |
|  Checks queues   |                          | (setTimeout, etc)|
+------------------+                          +------------------+
       ^                  
       | (Pulls from)     
       +-----------------------+-----------------------+
                               |                       |
                     +-------------------+   +-------------------+
                     |  MICROTASK QUEUE  |   |   MACROTASK QUEUE |
                     | (Promises, micro) |   | (setTimeout, I/O) |
                     +-------------------+   +-------------------+*/