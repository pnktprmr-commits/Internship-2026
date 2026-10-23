// Task 1 & 2: Hoisting & Variables
console.log("--- Task 1 & 2: Hoisting ---");
console.log(price); // Output: undefined (var is hoisted without initialization)
var price = 100;
console.log(price); // Output: 100

// Task 3: TDZ (Temporal Dead Zone) Correction
console.log("\n--- Task 3: TDZ ---");
const course = "MERN Stack";
console.log(course); // Output: MERN Stack (accessed after declaration)

// Task 4: Function Comparison
console.log("\n--- Task 4: Function Comparison ---");
console.log("Declaration test:", squareDeclaration(4)); // Works! Outputs 16

function squareDeclaration(num) {
    return num * num;
}

const squareExpression = function(num) {
    return num * num;
};
console.log("Expression test:", squareExpression(4)); // Works here! Outputs 16

// Task 5: Debugging Print Message
console.log("\n--- Task 5: Debugging ---");
const welcomeMessage = "Welcome";

function printMessage() {
  console.log(welcomeMessage);
}
printMessage();

// Task 6: Execution Flow
console.log("\n--- Task 6: Execution Flow ---");
function calculateTotal(itemPrice, quantity) {
    let total = itemPrice * quantity;
    return total;
}

let finalAmount = calculateTotal(50, 3);
console.log(`Final Calculated Total: ${finalAmount}`); // Output: 150