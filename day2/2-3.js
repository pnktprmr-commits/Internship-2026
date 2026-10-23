// ==========================================
// 1. forEach(): Print all technology names
// ==========================================
console.log("--- 1. forEach() ---");
const technologies = ["React", "Node.js", "MongoDB", "Express"];

technologies.forEach(tech => {
    console.log(tech);
});
console.log("");


// ==========================================
// 2. map(): Create a new array of squares
// ==========================================
console.log("--- 2. map() ---");
const numbers = [2, 3, 4, 5];

const squares = numbers.map(num => num * num);

console.log("Original numbers:", numbers);
console.log("Squared numbers:", squares);
console.log("");


// ==========================================
// 3. filter(): Select marks >= 60
// ==========================================
console.log("--- 3. filter() ---");
const marks = [45, 78, 92, 55, 60, 34, 88];

const passingMarks = marks.filter(mark => mark >= 60);

console.log("All marks:", marks);
console.log("Marks >= 60:", passingMarks);
console.log("");


// ==========================================
// 4. find(): Find user with ID 3
// ==========================================
console.log("--- 4. find() ---");
const users = [
    { id: 1, name: "Asha" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" },
    { id: 4, name: "Karan" }
];

const targetUser = users.find(user => user.id === 3);

console.log("Found user:", targetUser);
console.log("");


// ==========================================
// 5. filter() + map(): Products below ₹1,000
// ==========================================
console.log("--- 5. filter() + map() ---");
const products = [
    { name: "Wireless Mouse", price: 750 },
    { name: "Mechanical Keyboard", price: 2500 },
    { name: "USB-C Cable", price: 350 },
    { name: "Gaming Headset", price: 1800 },
    { name: "Desk Pad", price: 500 }
];

const affordableProductNames = products
    .filter(product => product.price < 1000)
    .map(product => product.name);

console.log("Affordable products (< ₹1,000):", affordableProductNames);
console.log("");


// ==========================================
// 6. Challenge: Filter students scoring 70+ and print names
// ==========================================
console.log("--- 6. Challenge ---");
const students = [
    { name: "Asha", score: 85 },
    { name: "Rahul", score: 62 },
    { name: "Priya", score: 91 },
    { name: "Karan", score: 45 },
    { name: "Neha", score: 74 }
];

students
    .filter(student => student.score >= 70)
    .forEach(student => {
        console.log(`Top Student: ${student.name} (${student.score} marks)`);
    });