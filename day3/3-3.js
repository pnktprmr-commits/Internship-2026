// Create an original object
const originalUser = { name: "Asha", role: "Developer" };

// Assign it to another variable (copies the memory reference, not the object itself)
const assignedUser = originalUser;

// Modify a property using the new variable
assignedUser.role = "Senior Developer";

console.log("Original User Role:", originalUser.role); // Output: Senior Developer
console.log("Assigned User Role:", assignedUser.role); // Output: Senior Developer

//task2
const user = {
    id: 1,
    name: "Rahul",
    email: "rahul@oldmail.com"
};

// Generate a new object with an updated email using the spread operator
const updatedUser = {
    ...user,
    email: "rahul@newmail.com"
};

console.log("Original User Email:", user.email);       // Output: rahul@oldmail.com (preserved)
console.log("Updated User Email:", updatedUser.email);   // Output: rahul@newmail.com

//task3
const product = {
    name: "Smartphone",
    price: 25000,
    details: {
        color: "Black",
        dimensions: { width: "70mm", height: "150mm" }
    }
};

// Change only the color in a new object while maintaining immutability
const updatedProduct = {
    ...product,
    details: {
        ...product.details,
        color: "Midnight Blue" // Overriding just the color
    }
};

console.log("Original Color:", product.details.color);       // Output: Black (preserved)
console.log("Updated Color:", updatedProduct.details.color);   // Output: Midnight Blue

//task4
const item = {
    name: "Wireless Mouse",
    price: 750,
    stock: 45
};

// 1. Print keys
console.log("Keys:", Object.keys(item)); 
// Output: [ 'name', 'price', 'stock' ]

// 2. Print values
console.log("Values:", Object.values(item)); 
// Output: [ 'Wireless Mouse', 750, 45 ]

// 3. Print entries (key-value pairs)
console.log("Entries:", Object.entries(item)); 
// Output: [ [ 'name', 'Wireless Mouse' ], [ 'price', 750 ], [ 'stock', 45 ] ]

//task5
const students = [
    { id: 1, name: "Asha", marks: 85 },
    { id: 2, name: "Rahul", marks: 60 },
    { id: 3, name: "Priya", marks: 92 }
];

const targetId = 2; // Student whose marks we want to update
const newMarks = 75;

// Create a new array in which the selected student's marks are updated immutably
const updatedStudents = students.map(student => {
    if (student.id === targetId) {
        return { ...student, marks: newMarks }; // Return a new object for the matched student
    }
    return student; // Return original reference for unmatched students
});

console.log("Original Students Array:", students); 
// Rahul's marks remain 60

console.log("Updated Students Array:", updatedStudents); 
// Rahul's marks are updated to 75, while Asha and Priya remain untouched


