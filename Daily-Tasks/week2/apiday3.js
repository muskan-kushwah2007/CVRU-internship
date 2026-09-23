// Simulate API Call with setTimeout
function fakeAPICall() {
  console.log("Fetching user details...");
  setTimeout(() => {
    console.log("User data received ");
    setTimeout(() => {
      console.log("Processing Data...");
    }, 1500);

  }, 2000);
}

fakeAPICall();

//  Promise Example
const simulateFetch = new Promise((resolve, reject) => {
  let isOnline = true; // Change to false to test rejection

  setTimeout(() => {
    if (isOnline) {
      resolve("Data fetched successfully ");
    } else {
      reject("Network error ");
    }
  }, 1500);
});
simulateFetch
  .then(msg => console.log(msg))
  .catch(err => console.error(err));


//  Async/Await with Fetch

async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();
    console.log("Latest Posts:", posts);
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

loadPosts();