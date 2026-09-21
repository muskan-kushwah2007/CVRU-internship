// Week 2 - Day 1 - task 2 - spread and rest function practice
const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "mango"];


const allFruits = [...fruits, ...moreFruits];

console.log(allFruits); 
// Output: ["apple", "banana", "cherry", "mango"]


function printFruits(...fruitList) {
  fruitList.forEach(fruit => console.log(fruit));
}

// Test with 3 arguments
printFruits("apple", "banana", "cherry");

// Test with merged array passed 
printFruits(...allFruits);


// Template Literals
const fname = "Priya";
const course = "JavaScript Mastery";

console.log(`Hello ${fname}! Welcome to ${course}.`);

// Code Refactor
// Convert this old JS code to ES6:
const user = { uname : "Aman", age : 22};
const greet = ({ uname, age}) => `Hello ${uname}, you are ${age} year old.`;
console.log(greet(user));


// Student Score Analyzer
const students = [
  { name: "Aman", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Riya", marks: 68 },
  { name: "John", marks: 49 }
];
const passedStudents = students
  .filter(student => student.marks >= 50)
  .map(student => ({
    name: student.name,
    marks: student.marks + 5
}));

passedStudents.forEach(student => {
  console.log(`${student.name}: ${student.marks}`);
});
const totalMarks = passedStudents.reduce((sum, student) => sum + student.marks, 0);
const classAverage = totalMarks / passedStudents.length;

console.log(`Class Average: ${classAverage}`);