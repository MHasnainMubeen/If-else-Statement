function isVowel(char) {
    // Convert the character to lowercase for case-insensitive check
    char = char.toLowerCase();
  
    const vowels = "aeiou"; // String containing all vowels
  
    // Use includes() to check if the character is present in the vowels string
    return vowels.includes(char);
  }
  
  // Example usage
  const inputChar = prompt("Enter a character: ");
  const isAVowel = isVowel(inputChar);
  
  console.log(`${inputChar} is a vowel: ${isAVowel}`);
  