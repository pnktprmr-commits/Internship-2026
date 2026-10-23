const name = "pihu";
let age = 20;
const city = "nadiad";
const course = "Full Stack Web Development";

console.log(`Hello, my name is ${name}. I am ${age} years old, live in ${city}, and I am currently enrolled in the ${course} course.`);

//

// Student profile using const for unchanging data and let for mutable data
const studentId = "ST1024";
const studentName = "pihu";
let taskCount = 3;

// Update the task count twice
taskCount = 4; // First update (completed an assignment)
taskCount = 5; // Second update (added a bonus task)

console.log(`Student ID: ${studentId}, Name: ${studentName}, Total Completed Tasks: ${taskCount}`);

//

// 1. Global Scope
const globalAppVersion = "v1.0.0";

function checkScope() {
    // 2. Function Scope
    let functionScopedVar = "I am inside the function";
    console.log(globalAppVersion); // Accessible (Global)
    console.log(functionScopedVar); // Accessible (Function)
}
checkScope();

// 3. Block Scope & var vs let inside an if block
if (true) {
    var blockVar = "I am var (function/global scoped)";
    let blockLet = "I am let (block scoped)";
    console.log(blockLet); // Accessible inside block
}

console.log(blockVar); // Accessible outside block (var leaks out of blocks)
// console.log(blockLet); // ReferenceError: blockLet is not defined outside the block

//
let marks = 95; // Outer variable

function calculateResult() {
    let marks = 80; // Inner variable shadowing the outer one
    console.log("Inside function marks:", marks); // Prints 80
}

calculateResult();
console.log("Outside function marks:", marks); // Prints 95

//
function calculateBill(price, quantity) {
    // Temporary variables kept inside the function scope
    let subtotal = price * quantity;
    let taxRate = 0.05; // 5% tax
    let total = subtotal + (subtotal * taxRate);
    
    return total;
}

// Example usage:
let finalBill = calculateBill(150, 4);
console.log(`Total Bill Amount: $${finalBill}`);

//
function showStudent() {
  const name = "pihu";
  let marks = 80;
  
  // To print them, the console.log statements must be inside the function scope 
  // or the function needs to return them.
  console.log(name);
  console.log(marks);
}

showStudent();