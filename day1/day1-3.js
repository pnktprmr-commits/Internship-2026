// 1. Get full name
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 2. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 3. Find the largest of three numbers
function getLargest(a, b, c) {
    return Math.max(a, b, c);
}

// 4. Calculate discounted price
function calculateDiscount(price, percentage) {
    let discountAmount = price * (percentage / 100);
    return price - discountAmount;
}

// Test outputs:
console.log(getFullName("pankti", "Parmar"));          // Output: Asha Patel
console.log(isEven(4));                            // Output: true
console.log(getLargest(12, 45, 23));               // Output: 45
console.log(calculateDiscount(200, 15));           // Output: 170

//
// 1. Function Declaration (Fully hoisted)
function calculateTotalDecl(price, quantity) {
    return price * quantity;
}

// 2. Function Expression (Stored in a variable, not hoisted)
const calculateTotalExpr = function(price, quantity) {
    return price * quantity;
};

// 3. Arrow Function (Concise syntax, lexical 'this')
const calculateTotalArrow = (price, quantity) => price * quantity;

// Testing all three:
console.log(calculateTotalDecl(10, 5));   // 50
console.log(calculateTotalExpr(10, 5));   // 50
console.log(calculateTotalArrow(10, 5));  // 50

//// Sample dataset for testing
const students = [
    { name: "pihu", marks: 85 },
    { name: "sonam", marks: 42 },
    { name: "Priya", marks: 91 },
    { name: "Karan", marks: 33 },
    { name: "isha", marks: null } // Handling invalid/missing data
];

// 1. Calculate Average Marks (ignoring invalid entries)
function calculateAverage(studentsList) {
    let validStudents = studentsList.filter(s => typeof s.marks === 'number' && !isNaN(s.marks));
    if (validStudents.length === 0) return 0;
    
    let totalMarks = validStudents.reduce((sum, s) => sum + s.marks, 0);
    return totalMarks / validStudents.length;
}

// 2. Find Highest-Scoring Student
function getTopStudent(studentsList) {
    let validStudents = studentsList.filter(s => typeof s.marks === 'number' && !isNaN(s.marks));
    if (validStudents.length === 0) return null;

    return validStudents.reduce((top, current) => current.marks > top.marks ? current : top);
}

// 3. Filter Passing Students (Marks >= 40)
function getPassingStudents(studentsList) {
    return studentsList.filter(s => typeof s.marks === 'number' && s.marks >= 40);
}

// 4. Count Passing Students
function countPassingStudents(studentsList) {
    return getPassingStudents(studentsList).length;
}

// 5. Sanitize / Handle Missing Marks
function sanitizeStudentData(studentsList) {
    return studentsList.map(s => ({
        name: s.name,
        marks: (typeof s.marks === 'number' && !isNaN(s.marks)) ? s.marks : 0
    }));
}

// Testing the functions:
console.log("Average Marks:", calculateAverage(students));
console.log("Top Student:", getTopStudent(students));
console.log("Passing Students:", getPassingStudents(students));
console.log("Passing Count:", countPassingStudents(students));

//
