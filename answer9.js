function isLeapYear(year) {
    // Check if the year is divisible by 400 (guaranteed leap year)
    if (year % 400 === 0) {
      return true;
    }
  
    // Check for years divisible by 4 but not by 100
    return (year % 4 === 0 && year % 100 !== 0);
  }
  
  // Get the year from the user
  const inputYear = parseInt(prompt("Enter a year in YYYY format: "));
  
  // Check if the year is a leap year
  const isLeap = isLeapYear(inputYear);
  
  // Display the result to the user using conditional statement
  if (isLeap) {
    console.log(`${inputYear} is a leap year.`);
  } else {
    console.log(`${inputYear} is not a leap year.`);
  }
  