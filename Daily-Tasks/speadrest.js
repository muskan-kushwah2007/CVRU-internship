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