// Array of five programming languages
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// Extract the first and third elements (skipping the second element with a comma)
const [firstLang, , thirdLang] = languages;

console.log("First Language:", firstLang);   // Output: JavaScript
console.log("Third Language:", thirdLang);   // Output: Java

//
// Employee object
const employee = {
    fullName: "Asha Patel",
    role: "Software Engineer",
    department: "Engineering"
    // 'city' is intentionally missing to test default values
};

// Extract name, role, and city. Rename 'fullName' to 'name', and assign a default for 'city'.
const { fullName: name, role, city = "Remote / Not Specified" } = employee;

console.log("Name:", name);       // Output: Asha Patel
console.log("Role:", role);       // Output: Software Engineer
console.log("City:", city);       // Output: Remote / Not Specified (default value used)

//
const groupA = ["Asha", "Rahul", "Priya"];
const groupB = ["Karan", "Neha", "Simran"];

// 1. Combine two arrays
const combinedStudents = [...groupA, ...groupB];
console.log("Combined Students:", combinedStudents);

// 2. Create a copy and add one new student without mutating the original
const updatedStudents = [...combinedStudents, "Vikram"];

console.log("Original Combined:", combinedStudents); 
// Output remains unchanged: ['Asha', 'Rahul', 'Priya', 'Karan', 'Neha', 'Simran']

console.log("Updated Copy with New Student:", updatedStudents); 
// Output: ['Asha', 'Rahul', 'Priya', 'Karan', 'Neha', 'Simran', 'Vikram']

//
// Function that accepts any number of marks using the rest parameter
function calculateAverage(...marks) {
    if (marks.length === 0) return 0;
    
    let sum = marks.reduce((total, current) => total + current, 0);
    return sum / marks.length;
}

// Test outputs with varying numbers of arguments:
console.log("Average (85, 90, 78):", calculateAverage(85, 90, 78));       // Output: 84.333...
console.log("Average (50, 60, 70, 80, 90):", calculateAverage(50, 60, 70, 80, 90)); // Output: 70

//
// Function that accepts an object and destructures its properties right in the parameter list
function printUserInfo({ name, email, role }) {
    console.log(`User Profile:`);
    console.log(`- Name: ${name}`);
    console.log(`- Email: ${email}`);
    console.log(`- Role: ${role}\n`);
}

// Sample object
const userObj = {
    name: "Asha Patel",
    email: "asha.patel@example.com",
    role: "Full Stack Developer",
    status: "Active" // Extra properties in the object are ignored safely
};

printUserInfo(userObj);