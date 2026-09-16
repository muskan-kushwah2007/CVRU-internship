// Function Expressions vs Arrow Functions
// Function Declaration
function greet(name) {
return `Hello, ${name}!`;
}

// Function Expression
const greet2 = function(name) {
return `Hi, ${name}!`;
};

// Arrow Function
const greet3 = (name) => `Hey, ${name}!`;

console.log(greet("Aman"));
console.log(greet2("Sara"));
console.log(greet3("John"));

// Callback Functions
// A callback is a function passed as an argument to another function.
// function processUserInput(callback) {
// const name = prompt("Enter your name:");
// callback(name);
// }

// function greetUser(userName) {
// alert(`Welcome, ${userName}!`);
// }

// processUserInput(greetUser);

// map() — Transform data
const numbers = [1, 2, 3, 4, 5, 6, 7,8];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() — Select data
const ages = [12, 18, 25, 30, 15,35, 13,54];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]

// reduce() — Combine data
const expenses = [200, 100, 300, 150];
const total = expenses.reduce((sum, amount) => sum + amount, 0);
console.log(`Total Expense: ₹${total}`);

// Chaining Methods (map + filter + reduce)
const marks = [30, 45, 60, 75, 90,65,23,45];

const result = marks
.filter(m => m >= 50) // keep only passed students
.map(m => m + 5) // add 5 bonus marks
.reduce((sum, m) => sum + m, 0); // total marks

console.log(`Final total: ${result}`);