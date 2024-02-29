// Simulate storing a password (replace with actual storage mechanism)
const CORRECT_PASSWORD = "Zainab_ke_papa"; // Replace with a secure password storage method

function validatePassword() {
  // Get user input password
  const enteredPassword = prompt("Enter your password: ");

  // Check if password is empty
  if (!enteredPassword) {
    console.error("Please enter your password.");
    return; // Exit the function if no password is entered
  }

  // Validate password match
  if (enteredPassword === CORRECT_PASSWORD) {
    console.log("Correct! The password you entered matches the original password.");
  } else {
    console.error("Incorrect password.");
  }
}

validatePassword();