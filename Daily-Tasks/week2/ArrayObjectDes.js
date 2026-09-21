// Week 2 - Day 1 - Task 1 – Array/Object Destructuring

const car = { brand: "Tesla", model: "Model 3", color: "white" };

const { brand, model, color } = car ;//object

console.log("car brand",brand);
console.log("car model", model);
console.log("car color",color);
console.log("car feactures :",brand , model , color);
console.log(brand,model);

const cars = ["Tesla", "Model 3", "white" ];

const [first, ,third] = cars;

console.log(first); // Output: Tesla
console.log(third); // Output: white


