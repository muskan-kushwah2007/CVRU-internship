// day 4 js file
console.log("Hello from external JS!");
document.getElementById("greet").innerText = "Welcome to JavaScript Basics!";

// Variables in JavaScript
let username = "John";
let age = 20;
let isStudent = true;

console.log(typeof username); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean

// Operators
let x = 10, y = 5;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0

// Conditionals
let age1 = 18;

if (age1 >= 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a minor!");
}

// Using == vs ===
console.log(5 == "5") // true (only compares value)

console.log(5 === "5") // false (compares type + value)

// Basic Function
function greet() {
        console.log("Hello, welcome to JavaScript!");
}

greet(); // Call the function

// Function with Parameters
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30

// Arrow Functions
const greet1 = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet1("Alice"));

// Simplified version:
const double = n => n * 2;
console.log(double(5)); // 10

// Template Literals
let fname = "John";
let age2 = 22;

console.log(`My name is ${fname} and I am ${age2} years old.`);

let message = `
    Hello ${fname},
    Welcome to MERN Training!
`;
console.log(message);

// Arrays and Objects Basics
// Arrays (Lists)
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Objects (Key–Value)
let student = {
name: "Alice",
age: 21,
course: "MERN"
};

console.log(student.name); // Alice
console.log(student["age"]); // 21
