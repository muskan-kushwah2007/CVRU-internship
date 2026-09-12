// calculator js file
// Inputs aur Output selectors
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const output = document.getElementById('output');

// Selected operation store karne ke liye
let selectedOperator = null;

// Sabhi buttons par click event set karna
const buttons = document.querySelectorAll('.button-group button');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const action = this.innerText.trim();

    // 1. Clear Button (❎)
    if (action === '❎') {
      num1Input.value = '';
      num2Input.value = '';
      output.innerText = '0';
      selectedOperator = null;
      return;
    }

    // 2. Equal Button (=) - Operation Run Karna
    if (action === '=') {
      calculateResult();
      return;
    }

    // 3. Operator Selection (+, -, *, /, %)
    selectedOperator = action;
  });
});

function calculateResult() {
  const val1 = num1Input.value.trim();
  const val2 = num2Input.value.trim();

  // Non-empty Field Validation
  if (val1 === '' || val2 === '') {
    alert('Kripya dono numbers enter karein!');
    return;
  }

  if (!selectedOperator) {
    alert('Kripya koi ek operation (+, -, *, /, %) select karein!');
    return;
  }

  const n1 = parseFloat(val1);
  const n2 = parseFloat(val2);
  let result = 0;

  switch (selectedOperator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      if (n2 === 0) {
        alert('0 se divide nahi kar sakte!');
        return;
      }
      result = n1 / n2;
      break;
    case '%':
      result = n1 % n2;
      break;
  }

  // Result display karna
  output.innerText = result;
}