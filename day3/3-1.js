// Create employee object:task1
const employee = {
    name: "Asha Patel",
    department: "Engineering",
    salary: 85000,
    employeeId: "EMP1042"
};

// Printing every property using Dot Notation
console.log("--- Dot Notation ---");
console.log("Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
console.log("Employee ID:", employee.employeeId);

// Printing every property using Bracket Notation
console.log("\n--- Bracket Notation ---");
console.log("Name:", employee["name"]);
console.log("Department:", employee["department"]);
console.log("Salary:", employee["salary"]);
console.log("Employee ID:", employee["employeeId"]);

//task2
// Create product object
const product = {
    name: "Wireless Mouse",
    price: 750,
    category: "Electronics"
};

// 1. Add a stock property
product.stock = 45;

// 2. Update its price
product.price = 699;

// 3. Delete one property (e.g., category)
delete product.category;

console.log("Modified Product Object:", product);
// Output: { name: 'Wireless Mouse', price: 699, stock: 45 }

//task3
// Create student object with nested structures
const student = {
    personalDetails: {
        firstName: "Asha",
        lastName: "Patel",
        age: 21
    },
    marks: {
        math: 88,
        science: 92,
        english: 79
    },
    address: {
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001"
    }
};

// Print the student's city
console.log("City:", student.address.city); // Output: Mumbai

// Find and print the highest-scoring subject's marks
const subjectMarks = Object.values(student.marks);
const highestMarks = Math.max(...subjectMarks);

console.log("Highest Marks:", highestMarks); // Output: 92

//task4
// Create user object WITHOUT a social property
const user = {
    id: 101,
    name: "Rahul",
    email: "rahul@example.com"
};

// Safely try to access social.linkedin using optional chaining
const linkedinProfile = user.social?.linkedin;

console.log("LinkedIn Profile:", linkedinProfile); 
// Output: undefined (instead of throwing a TypeError)