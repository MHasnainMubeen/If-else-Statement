// Replace "Your Name" with your actual name
const yourName = "Areeb";

// Get the name from the user
const userName = prompt("Enter your name: ");

// Check if the names match (case-insensitive)
if (userName.toLowerCase() === yourName.toLowerCase()) {
  console.log("Hello, " + userName + "! Nice to meet you.");
}