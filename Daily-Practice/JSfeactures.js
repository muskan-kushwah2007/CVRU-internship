// Global vs local scope
let username = "Alice";    //global var

function greet() {
let name = "Bob";  //local var
console.log("Inside function:", name);
}

greet();
console.log("Outside function:", username);

// 'this' keyword example
const user = {
name: "Charlie",
sayHello: function() {
console.log(`Hi, I am ${this.name}`);
}
};

user.sayHello(); // "Hi, I am Charlie"

// Object destructuring
const student = { name: "Rahul", age: 25, course: "Web Dev" };
const { name, age } = student;

console.log(name); // Rahul
console.log(age); // 20
console.log(name, age);
// console.log(course)
// console.log(name, age, course)

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, , third] = colors;

console.log(first); // red
console.log(third); // blue


// Spread operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [3, 4];
const combine = [...arr1, ...arr3]
const combined = [...arr1, ...arr2, ...arr3];
console.log(combined); // [1, 2, 3, 4]
console.log(combine)

function sum(...numbers) {
return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6)); // 10

// Template literal
const fuser = "Sana";
const message = `Welcome, ${fuser}! Have a great day `;
console.log(message);

// Shorthand object
const title = "Developer";
const exp = 3;

const profile = { title, exp };
console.log(profile); // { title: "Developer", exp: 3 }