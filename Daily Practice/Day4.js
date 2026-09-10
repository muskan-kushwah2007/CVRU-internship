let username = "John";
let age1 = 20;
let isStudent = true;

console.log(typeof username); // string
console.log(typeof age1); // number
console.log(typeof isStudent); // boolean

//operators
let x = 10, y = 6;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0

//if-else statment
let age = 18;

if (age >= 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a minor!");
}

// using ==  vs ===
console.log(5 == "5") // true (only compares value)

console.log(5 === "5")// false (compares type + value)

// basic function
function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet(); // Call the function

//Function with Parameters
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30

//Arrow Functions (ES6 Feature)
//A shorter way to write functions:
const greet1 = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet1("Alice"));


const greet2 = (name) => {
    return `Hello, ${name}!`;
};

let greetresult = greet2("Alice")
console.log(greetresult)

//Simplified version:
const double = n => n * 2;
console.log(double(5)); // 10

//template literals
let name1 = "John";
let age2 = 22;

console.log(`My name is ${name1} and I am ${age2} years old.`);

//handle multi line string
let message = `
    Hello ${name},
    Welcome to MERN Training!
`;
console.log(message);

//array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

//Objects (Key–Value)
let student = {
name: "Alice",
age: 21,
course: "MERN"
};

console.log(student.name); // Alice
console.log(student["age"]); // 21