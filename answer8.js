function getTimeCase(time) {
    // Convert the string to an integer and handle invalid inputs
    const hours = parseInt(time);
  
    if (isNaN(hours)) {
      return "Invalid time format. Please use 24-hour format (e.g., 1900).";
    }
  
    if (hours >= 0 && hours < 5) {
      return "Good Night";
    } else if (hours >= 5 && hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      return "Good Afternoon";
    } else if (hours >= 17 && hours <= 23) {
      return "Good Evening";
    } else {
      return "Invalid time format. Please use 24-hour format (e.g., 1900)."; // Handle time exceeding 23 hours
    }
  }
  
  // Get input from the user
  const userInput = prompt("Enter time in 24-hour format (e.g., 1900): ");
  
  // Get and display the time case
  const timeCase = getTimeCase(userInput);
  console.log(timeCase);
  