/*Here are the correct answers and brief explanations for each of your JavaScript quiz questions:

---

### 1. What is a closure?

 Answer:B. A function retaining access to its lexical scope**

---

### 2. Which method creates a new array by transforming each element?

 Answer:C. map()**

---

### 3. What does filter() return?

Answer:B. A new array of matching elements**

---

### 4. What does find() return if no match exists?

Answer:D. undefined**

---

### 5. Which method is designed for performing an action on each item without creating a transformed array?
 
Answer:A. forEach()**

---

### 6. A callback is:
 Answer:B. A function passed to another function**

---

### 7. What does this return? `[1, 2, 3].map(n => n + 1)`

Answer:B. [2, 3, 4]**

---

### 8. What is the result of `[2, 4, 6].filter(n => n > 4)`?

 Answer:B. [6]**

---

### 9. What is a higher-order function?

 Answer:A. A function that accepts or returns another function**

---

### 10. Why do two calls to a counter factory produce independent counters?

Answer:B. Each call creates a separate lexical environment
*/

//SECTION B

/*function outer() {
  let value = 5;
  return () => ++value;
}

const counter = outer();

console.log(counter());
console.log(counter());

//Q2
const numbers = [1, 2, 3];

const result = numbers.map(n => n * 3);

console.log(result);

//Q3

*/

//Q4
const numbers = [4, 8, 12];

console.log(numbers.find(n => n > 5));
