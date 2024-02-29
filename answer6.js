
function checkCharacterType(char) {
    const code = char.charCodeAt(0); // Get the ASCII code of the character
  
    if (code >= 48 && code <= 57) {
      console.log(`${char} is a number.`);
    } else if (code >= 65 && code <= 90) {
      console.log(`${char} is an uppercase letter.`);
    } else if (code >= 97 && code <= 122) {
      console.log(`${char} is a lowercase letter.`);
    } else {
      console.log(`${char} is not a number or letter.`);
    }
  }
  
  // Get the character from the user
  const inputChar = prompt("Enter a character: ");
  
  // Check the character type
  checkCharacterType(inputChar);
  