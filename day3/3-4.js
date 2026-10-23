/*Section A 
1]Which syntax accesses the name property of an object?

Answer: B. user.name

2]What does ?. represent?

Answer: B. Optional chaining

3]What does Object.keys(obj) return?

Answer: C. An array of property names

4]What does { ...user } generally create?

Answer: B. A shallow copy

5]Which syntax collects remaining function arguments into an array?

Answer: A. ...args

6]Which statement about a const object is correct?

Answer: C. Its properties can change, but the variable cannot be reassigned.

7]What does Object.values(obj) return?

Answer: A. Property values

8]Which syntax renames a property during destructuring?

Answer: B. { name: studentName } (Note: { original: renamed } syntax is used).

9]What happens when two variables reference the same object?

Answer: B. Changes through one reference may be visible through the other.

10]Which approach is preferred for updating React state objects?

Answer: B. Create an updated object.

*/

/*const user = { name: "Aliena", age: 20 };
const { name } = user;

console.log(name);

//q2
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);

console.log(original.length);
console.log(copy.length);*/

//q3
/*const user = { name: "Aliena", city: "Anand" };
const updated = { ...user, city: "Surat" };

console.log(user.city);   // Anand
console.log(updated.city); // Surat

//q4
const [first, ...remaining] = [5, 10, 15, 20];

console.log(first);
console.log(remaining);

//q5
const product = {
  name: "Laptop",
  details: { color: "Silver" }
};

const copy = { ...product };
copy.details.color = "Black";

console.log(product.details.color);*/

//SECTION C

/*const user = { name: "Asha" };
console.log(user.address?.city); // Output: undefined (instead of crashing)

//Q2
const numbers = [1, 2, 3];
const copy = numbers;

copy.push(4);

console.log(numbers);

//Q3
/*
const student = { name: "Jay", marks: 70 };

const updatedStudent = {
  ...student,
  marks: student.marks
};

updatedStudent.marks = 90;

console.log(student.marks);
*/

//SECTION D
// Create an object with title, duration, and price
/*const course = {
  title: "JavaScript Fundamentals",
  duration: "4 weeks",
  price: 199
};

// Add a level property
course.level = "Beginner";

// Update the price
course.price = 249;

console.log(course);*/

//Q2
/*const user = {
  name: "Riya",
  email: "riya@example.com"
  // Note: 'city' is not defined in the object, so the default will be used
};

// Extract name and email, and assign a default value "Anand" to city
const { name, email, city = "Anand" } = user;

console.log(name);  // Riya
console.log(email); // riya@example.com
console.log(city);  // Anand (default value)*/

//Q3
// Write sumAll() using rest parameters (...) to accept any number of arguments
/*function sumAll(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

// Example usage:
console.log(sumAll(1, 2, 3));       // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100 */

//Q4
/*const originalUser = {
  name: "Aliena",
  age: 22,
  role: "Student"
};

// Create a new object with an updated role without modifying the original
const updatedUser = {
  ...originalUser,
  role: "Instructor"
};

console.log(originalUser.role); // Output: Student (unchanged)
console.log(updatedUser.role);  // Output: Instructor (updated)*/

//Q6
// 1] Create at least three student objects containing id, name, marks, and address
/*const student1 = {
  id: 1,
  name: "Riya",
  marks: 85,
  address: { city: "Anand", pin: 388001 }
};

const student2 = {
  id: 2,
  name: "Aliena",
  marks: 62,
  address: { city: "Surat", pin: 395007 }
};

const student3 = {
  id: 3,
  name: "Karan",
  marks: 78,
  address: { city: "Ahmedabad", pin: 380001 }
};

// 2] Store all students in an array
const students = [student1, student2, student3];

console.log("--- All Students: Name and City ---");
// 3] Display each student's name and city using destructuring inside loops/callbacks
students.forEach(({ name, address: { city } }) => {
  console.log(`Name: ${name}, City: ${city}`);
});

// 4] Use filter() to create a new array of students who scored at least 70 marks
const topStudents = students.filter(student => student.marks >= 70);
console.log("\n--- Students with >= 70 marks ---");
console.log(topStudents);

// 5 & 7] Use map() and spread operator (...) to update marks for a selected student immutably
// Let's update Aliena's marks (id: 2) from 62 to 75 without mutating the original object
const targetId = 2;
const newMarks = 75;

const updatedStudents = students.map(student => {
  if (student.id === targetId) {
    // Return a new object with updated marks, keeping the rest unchanged
    return {
      ...student,
      marks: newMarks
    };
  }
  // Return original reference if it's not the target student
  return student;
});

console.log("\n--- After Immutably Updating Marks ---");
console.log("Original Student 2 Marks:", student2.marks); // Stays 62 (No mutation!)
console.log("Updated Array Student 2 Marks:", updatedStudents.find(s => s.id === targetId).marks); // Becomes 75

// 6] Use destructuring to extract a student's name and marks
// Let's extract from the first student in our array
const { name: extractedName, marks: extractedMarks } = students[0];
console.log(`\n--- Extracted Details ---`);
console.log(`Extracted Name: ${extractedName}, Marks: ${extractedMarks}`);*/

//SECTION F
/*1. What is the difference between an object and an array?
Array: An ordered collection of items (elements) indexed by numbers starting from 0. Arrays are best used for lists of similar items where order matters 
(e.g., a list of student names or a sequence of numbers).
Object: An unordered collection of key-value pairs (properties) indexed by strings (or Symbols). Objects are best used to represent a single entity with distinct attributes 
(e.g., a student with properties like name, age, and city).*/
/*
2. Explain the difference between spread and rest.
Although both use the exact same syntax (...), they serve opposite purposes:
Spread Operator (...): Expands or unpacks an iterable (like an array or object) into individual elements or properties.
Example: const copy = [...original]; or combining objects { ...user, city: "Surat" }.
Rest Parameter (...): Collects multiple remaining elements or arguments into a single array. It is typically used in function definitions.
Example: function sumAll(...numbers) 

*/

/*3. What is a shallow copy?
A shallow copy creates a new object or array, but it only copies references to nested objects or arrays rather than duplicating them recursively.

If you modify a nested property inside a shallow copy, it will also affect the original object because both reference the exact same nested memory location.

Note: Methods like the spread operator (...), Object.assign(), and Array.prototype.slice() create shallow copies.*/

/*4. Why should we avoid directly mutating React state?
You should never mutate React state directly (e.g., state.count = 5 or user.name = "Aliena") for two main reasons:

Loss of Predictability & React Re-rendering: React relies on reference changes to detect updates and trigger re-renders. Direct mutation modifies the state in place without changing its memory reference, meaning React won't realize a change happened and the UI will fail to update.

Side Effects & Bugs: Direct mutation breaks features like time-travel debugging, predictable state histories, and concurrent rendering, often leading to subtle, hard-to-track bugs. Instead, always use state-setting functions (like useState setters) with new, immutable copies.

5. How can you safely access a possibly missing nested property?
You can safely access deeply nested properties that might be undefined or null using the Optional Chaining Operator (?.).

Example:

JavaScript
const city = user?.address?.city;
If user or address is missing/undefined, instead of throwing a TypeError, it safely short-circuits and evaluates to undefined.*/