// Example 1: Creating Strings
console.log("Example 1: Creating Strings:");

let str1 = "Hello, World!";   // String using double quotes
let str2 = 'JavaScript';      // String using single quotes
let str3 = `This is a template string`;  // Template string (backticks)
console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3:", str3);

// Example 2: String Concatenation
console.log("\nExample 2: String Concatenation:");

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // Concatenating using +
console.log("Full Name (using +):", fullName);

let greeting = `Hello, ${firstName} ${lastName}!`;  // Concatenating using template literals
console.log("Greeting (using template literals):", greeting);

// Example 3: String Length
console.log("\nExample 3: String Length:");

let sentence = "This is a test sentence.";
console.log("Length of sentence:", sentence.length);

// Example 4: Accessing Characters in a String
console.log("\nExample 4: Accessing Characters in a String:");

let charAtIndex = sentence.charAt(5); // Accessing character at index 5
console.log("Character at index 5:", charAtIndex);

let charAtIndex2 = sentence[7];  // Accessing character using array-like syntax
console.log("Character at index 7:", charAtIndex2);

// Example 5: String Methods
console.log("\nExample 5: String Methods:");

let text = "     Hello, JavaScript!    ";
console.log("Trimmed text:", text.trim());  // Removing whitespace from both ends

let upperCaseText = text.toUpperCase();    // Convert to upper case
console.log("Uppercase text:", upperCaseText);

let lowerCaseText = text.toLowerCase();    // Convert to lower case
console.log("Lowercase text:", lowerCaseText);

let indexOfJavaScript = text.indexOf("JavaScript");  // Finding index of a substring
console.log("Index of 'JavaScript':", indexOfJavaScript);

let replacedText = text.replace("JavaScript", "World");  // Replacing a substring
console.log("Replaced text:", replacedText);

// Example 6: String Splitting
console.log("\nExample 6: String Splitting:");

let sentence2 = "apple,banana,grape,orange";
let fruits = sentence2.split(",");  // Splitting by comma
console.log("Fruits array:", fruits);

// Example 7: Checking if a String Includes a Substring
console.log("\nExample 7: Checking if a String Includes a Substring:");

let containsJavaScript = text.includes("JavaScript");
console.log("Text includes 'JavaScript':", containsJavaScript);

let containsPython = text.includes("Python");
console.log("Text includes 'Python':", containsPython);
