function checkDataType(value) {
    const type = typeof value;
    let message;
  
    switch (type) {
      case "number":
        message = "The value is a number.";
        break;
      case "string":
        message = "The value is a string.";
        break;
      case "boolean":
        message = "The value is a boolean.";
        break;
      case "undefined":
        message = "The value is undefined.";
        break;
      default:
        message = "The value has an unsupported data type.";
    }
  
    console.log(message);
  }
  
  // Get user input
  const userInput = prompt("Enter a value: ");
  
  // Check and display the data type
  checkDataType(userInput);
  