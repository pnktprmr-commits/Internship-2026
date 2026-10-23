export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

import { add, subtract, multiply, divide } from './calculator.js';

console.log("Addition (5 + 3):", add(5, 3));         // 8
console.log("Subtraction (10 - 4):", subtract(10, 4)); // 6
console.log("Multiplication (3 * 4):", multiply(3, 4));// 12
console.log("Division (20 / 5):", divide(20, 5));     // 4