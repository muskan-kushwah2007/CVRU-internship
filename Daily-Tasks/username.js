// Display User’s Name Dynamically on Webpage
const userName = prompt("Please enter your name:");  //user se input

const headingElement = document.getElementById("welcomeHeading");

if (userName && userName.trim() !== "") {
    headingElement.textContent = `Welcome, ${userName}! 👋`;
} else {
    headingElement.textContent = "Welcome, Guest! 👋";
}