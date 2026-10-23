// ==========================================
// Task 1 — Basic Callback
// ==========================================
console.log("--- Task 1: Basic Callback ---");

function welcomeUser(name, callback) {
    console.log(`Welcome, ${name}!`);
    callback(); // Execute the passed callback function
}

welcomeUser("Asha", function() {
    console.log("Callback executed: User onboarding step complete.\n");
});


// ==========================================
// Task 2 — Calculator
// ==========================================
console.log("--- Task 2: Calculator ---");

function calculate(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}

// Callback functions for different operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

console.log("Addition (10 + 5):", calculate(10, 5, add));           // Output: 15
console.log("Subtraction (10 - 5):", calculate(10, 5, subtract));   // Output: 5
console.log("Multiplication (10 * 5):", calculate(10, 5, multiply)); // Output: 50
console.log("");


// ==========================================
// Task 3 — Higher-Order Function (Multiplier)
// ==========================================
console.log("--- Task 3: Higher-Order Function ---");

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5)); // Output: 10
console.log("Triple 5:", triple(5)); // Output: 15
console.log("");


// ==========================================
// Task 4 — Execution Order
// ==========================================
console.log("--- Task 4: Execution Order ---");

console.log("Message 1: Start");

setTimeout(() => {
    console.log("Message 2: Inside setTimeout (Asynchronous)");
}, 0);

console.log("Message 3: End\n");


// ==========================================
// Task 5 — Data Processing
// ==========================================
console.log("--- Task 5: Data Processing ---");

function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const doubleNumber = (num) => num * 2;
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = processArray(numbers, doubleNumber);

console.log("Original Array:", numbers);         // Output: [1, 2, 3, 4, 5]
console.log("Doubled Array:", doubledNumbers);   // Output: [2, 4, 6, 8, 10]