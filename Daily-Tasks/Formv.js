// Form validation js file
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  // Prevent page reload on form submit
  e.preventDefault();

  // Track validation status
  let isValid = true;

  // Clear previous error messages
  clearErrors();

  // 1. Full Name Validation
  const fullname = document.getElementById('fullname');
  if (fullname.value.trim() === '') {
    showError(fullname, 'nameError', 'Full Name is required!');
    isValid = false;
  }

  // 2. Email Validation
  const email = document.getElementById('email');
  if (email.value.trim() === '') {
    showError(email, 'emailError', 'Email address is required!');
    isValid = false;
  }

  // 3. Password Validation
  const password = document.getElementById('password');
  if (password.value.trim() === '') {
    showError(password, 'passError', 'Password is required!');
    isValid = false;
  }

  // 4. Age Validation
  const age = document.getElementById('age');
  if (age.value.trim() === '') {
    showError(age, 'ageError', 'Age is required!');
    isValid = false;
  }

  // 5. City Selection Validation
  const city = document.getElementById('city');
  if (city.value === '') {
    showError(city, 'cityError', 'Please select a city!');
    isValid = false;
  }

  // 6. Gender Selection Validation
  const genderOptions = document.getElementsByName('gender');
  let genderSelected = false;
  for (let radio of genderOptions) {
    if (radio.checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    document.getElementById('genderError').innerText = 'Please select your gender!';
    isValid = false;
  }

  // 7. Address Validation
  const address = document.getElementById('address');
  if (address.value.trim() === '') {
    showError(address, 'addressError', 'Address is required!');
    isValid = false;
  }

  // 8. Terms Checkbox Validation
  const terms = document.getElementById('terms');
  if (!terms.checked) {
    document.getElementById('termsError').innerText = 'You must accept the terms & conditions!';
    isValid = false;
  }

  // If all fields are valid
  if (isValid) {
    alert('Form submitted successfully!');
    document.getElementById('registrationForm').reset();
    clearErrors();
  }
});

// Helper function to show error message and add red border
function showError(inputElement, errorId, message) {
  inputElement.classList.add('input-error');
  document.getElementById(errorId).innerText = message;
}

// Clear errors on form reset or new attempt
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-msg');
  errorMessages.forEach(msg => msg.innerText = '');

  const errorInputs = document.querySelectorAll('.input-error');
  errorInputs.forEach(input => input.classList.remove('input-error'));
}

// Reset button click event
document.getElementById('registrationForm').addEventListener('reset', function () {
  clearErrors();
});