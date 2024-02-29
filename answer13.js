function compareNumbers(num1, num2) {
    if (num1 > num2) {
      return `${num1} is larger than ${num2}`;
    } else if (num2 > num1) {
      return `${num2} is larger than ${num1}`;
    } else {
      return `${num1} and ${num2} are equal`;
    }
  }
  
  // Get user input
  const num1 = parseInt(prompt("Enter the first number: "));
  const num2 = parseInt(prompt("Enter the second number: "));
  
  // Use the compareNumbers function to get the result
  const result = compareNumbers(num1, num2);
  
  // Display the result
  console.log(result);
  