function checkEvenOdd(number) {
    // Check if the remainder of dividing the number by 2 is 0 using the modulo operator (%)
    if (number % 2 === 0) {
      console.log(`${number} is even.`);
    } else {
      console.log(`${number} is odd.`);
    }
  }
  
  // Get the input number from the user
  const inputNumber = parseInt(prompt("Enter a number:"));
  
  // Call the checkEvenOdd function to determine and print the result
  checkEvenOdd(inputNumber);
  