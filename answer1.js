function isDivisibleByThree(number) {
    // Check if the remainder of dividing the number by 3 is 0 using the modulo operator (%)
    if (number % 3 === 0) {
      return true; // Number is divisible by 3
    } else {
      return false; // Number is not divisible by 3
    }
  }
  
  // Get the input number from the user
  const inputNumber = parseInt(prompt("Enter a number:"));
  
  // Check if the number is divisible by 3 and display the result
  if (isDivisibleByThree(inputNumber)) {
    console.log(`${inputNumber} is divisible by 3.`);
  } else {
    console.log(`${inputNumber} is not divisible by 3.`);
  }
  