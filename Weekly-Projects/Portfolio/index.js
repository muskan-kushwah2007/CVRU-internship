// 1. Theme Toggle (Light / Dark Mode)
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', function () {
  // Body par dark-mode class toggle karenge
  document.body.classList.toggle('dark-mode');

  // Button ka text update karenge
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = '☀️';
  } else {
    themeBtn.textContent = '🌙';
  }
});

// 2. Contact Form Submit Alert
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Page reload hone se rokta hai

  // User ka name input se nikalna
  const userName = document.getElementById('name').value;

  // Simple alert display karna
  alert('Thank you ' + userName + '! Your message has been sent.');

  // Form ko reset karna
  contactForm.reset();
});