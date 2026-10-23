// Global variable
function outerFunction() {
    const name = "pankti parmar";

    function innerFunction() {
        console.log("Hello from inner function, " + name);
    }

    innerFunction(); // Invoking the inner function inside the outer function
}

outerFunction(); // 

//
function createCounter() {
    let count = 10; // Initialized to 10

    return function() {
        count += 2; // Increases by 2 every time
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // Output: 12
console.log(counter()); // Output: 14
console.log(counter()); // Output: 16
//

function createUser(initialUsername) {
    // Private variable enclosed inside the function scope
    let username = initialUsername;

    return {
        getUsername: function() {
            return username;
        },
        setUsername: function(newUsername) {
            if (newUsername.trim().length > 0) {
                username = newUsername;
            }
        }
    };
}

const user = createUser("coder_pankti");
console.log(user.getUsername()); // Output: coder_asha

// Direct access to 'username' is impossible from the outside:
// console.log(username); // ReferenceError: username is not defined

//
function createCounterFactory() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

// Creating two independent counter instances
const counterA = createCounterFactory();
const counterB = createCounterFactory();

console.log("Counter A:", counterA()); // Output: 1
console.log("Counter A:", counterA()); // Output: 2

console.log("Counter B:", counterB()); // Output: 1 (Independent state!)
console.log("Counter A:", counterA()); // Output: 3 (Resumes its own state)

//
