// Example 1: Math Constants
console.log("Example 1: Math Constants:");

console.log("Math.PI:", Math.PI);     // Value of PI (π)
console.log("Math.E:", Math.E);       // Value of Euler's number (e)
console.log("Math.LN2:", Math.LN2);   // Natural logarithm of 2
console.log("Math.LN10:", Math.LN10); // Natural logarithm of 10
console.log("Math.LOG2E:", Math.LOG2E); // Logarithm of E (base 2)
console.log("Math.LOG10E:", Math.LOG10E); // Logarithm of E (base 10)
console.log("Math.SQRT2:", Math.SQRT2); // Square root of 2

// Example 2: Math Methods for Rounding
console.log("\nExample 2: Math Methods for Rounding:");

let num = 3.14159;

console.log("Math.round(num):", Math.round(num));     // Rounds to nearest integer (3)
console.log("Math.floor(num):", Math.floor(num));     // Rounds down (3)
console.log("Math.ceil(num):", Math.ceil(num));       // Rounds up (4)
console.log("Math.trunc(num):", Math.trunc(num));     // Removes the decimal part (3)

// Example 3: Math Methods for Random Numbers
console.log("\nExample 3: Math Methods for Random Numbers:");

console.log("Math.random():", Math.random()); // Returns a random floating-point number between 0 and 1

let randomInRange = Math.floor(Math.random() * 100); // Random integer between 0 and 99
console.log("Random integer between 0 and 99:", randomInRange);

// Example 4: Math Methods for Absolute and Power
console.log("\nExample 4: Math Methods for Absolute and Power:");

let negativeNum = -25;
let base = 2;
let exponent = 3;

console.log("Math.abs(negativeNum):", Math.abs(negativeNum));   // Absolute value (25)
console.log("Math.pow(base, exponent):", Math.pow(base, exponent));  // 2^3 = 8

// Example 5: Math Methods for Trigonometry
console.log("\nExample 5: Math Methods for Trigonometry:");

let angle = 45; // Degrees

// Converting angle to radians
let radians = angle * (Math.PI / 180);

console.log("Math.sin(radians):", Math.sin(radians)); // Sine of 45 degrees
console.log("Math.cos(radians):", Math.cos(radians)); // Cosine of 45 degrees
console.log("Math.tan(radians):", Math.tan(radians)); // Tangent of 45 degrees

// Example 6: Math Methods for Square Root and Minimum/Maximum
console.log("\nExample 6: Math Methods for Square Root and Min/Max:");

let num1 = 16;
let num2 = 9;
let num3 = 25;

console.log("Math.sqrt(num1):", Math.sqrt(num1)); // Square root of 16
console.log("Math.min(num1, num2, num3):", Math.min(num1, num2, num3)); // Minimum value (9)
console.log("Math.max(num1, num2, num3):", Math.max(num1, num2, num3)); // Maximum value (25)

// Example 7: Math Methods for Logarithms
console.log("\nExample 7: Math Methods for Logarithms:");

let value = 100;

console.log("Math.log(value):", Math.log(value));     // Natural logarithm (log base e)
console.log("Math.log2(value):", Math.log2(value));   // Logarithm with base 2
console.log("Math.log10(value):", Math.log10(value)); // Logarithm with base 10
