const currentHour = parseInt(prompt("Enter the current hour (24-hour format): "));

if (6 <= currentHour && currentHour < 9) {
  console.log("Breakfast is served.");
} else if (11 <= currentHour && currentHour < 13) {
  console.log("Time for lunch.");
} else if (17 <= currentHour && currentHour < 20) {
  console.log("It's dinner time.");
} else {
  console.log("Sorry, you'll have to wait, or go get a snack.");
}