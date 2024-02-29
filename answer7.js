function calculate(number1, operator, number2) {
    // Convert numbers from strings to floats for calculations
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
  
    switch (operator) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        // Check for division by zero
        if (number2 === 0) {
          return "Error: Division by zero";
        }
        return number1 / number2;
      case "%":
        // Check for modulo by zero
        if (number2 === 0) {
          return "Error: Modulo by zero";
        }
        return number1 % number2;
      default:
        return "Invalid operator";
    }
  }
  
  // Get input from the user
  const num1 = prompt("Enter the first number: ");
  const operator = prompt("Enter the operator (+, -, *, /, %): ");
  const num2 = prompt("Enter the second number: ");
  
  // Perform calculation and display result
  const result = calculate(num1, operator, num2);
  console.log(`Result: ${result}`);
  