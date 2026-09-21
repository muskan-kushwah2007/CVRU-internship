// 1 – Data Transformation with map() and filter()

const prices = [120,250,360,450,600];

const filteredPrices = prices.filter(price => price > 250);

const discountedPrice = filteredPrices.map(price => price * 0.9);

console.log("original Prices :", prices);
console.log("Discounted Prices :", discountedPrice);

// Calculate Total Expense with reduce()

const expenses = [
  { category: "Food", amount: 300 },
  { category: "Transport", amount: 150 },
  { category: "Shopping", amount: 400 },
];
const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
console.log(`Total Expense: ₹${totalExpense}`);

// Combine map(), filter(), reduce()

const scores = [45, 80, 90, 35, 60, 75];
const totalScore = scores
.filter(score => score >= 50)
.map(score => score + 10)
.reduce((acc, score) => acc + score, 0); 

console.log("Total Score:", totalScore);