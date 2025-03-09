// Example 1: Creating Numbers
console.log("Example 1: Creating Numbers:");

let num1 = 42;            // Integer
let num2 = 3.14;          // Floating-point number
let num3 = -100;          // Negative number

console.log("Integer num1:", num1);
console.log("Floating-point num2:", num2);
console.log("Negative num3:", num3);

// Example 2: Arithmetic Operations
console.log("\nExample 2: Arithmetic Operations:");

let addition = num1 + num2;    // Addition
let subtraction = num1 - num3; // Subtraction
let multiplication = num2 * 2; // Multiplication
let division = num1 / num2;    // Division

console.log("Addition (num1 + num2):", addition);
console.log("Subtraction (num1 - num3):", subtraction);
console.log("Multiplication (num2 * 2):", multiplication);
console.log("Division (num1 / num2):", division);

// Example 3: Number Methods
console.log("\nExample 3: Number Methods:");

let numberStr = "123.456";
let numFromStr = Number(numberStr); // Convert string to number
console.log("Number from string '123.456':", numFromStr);

let rounded = Math.round(num2);    // Rounding to the nearest integer
let floor = Math.floor(num2);      // Rounding down
let ceil = Math.ceil(num2);        // Rounding up
let power = Math.pow(num2, 2);     // Power (3.14^2)

console.log("Rounded num2:", rounded);   // Output: 3
console.log("Floored num2:", floor);     // Output: 3
console.log("Ceiled num2:", ceil);      // Output: 4
console.log("Power of num2 (3.14^2):", power); // Output: 9.8596

// Example 4: Special Numbers
console.log("\nExample 4: Special Numbers:");

let infinityNum = Infinity;    // Positive infinity
let negativeInfinity = -Infinity;  // Negative infinity
let notANumber = NaN;          // Not a number

console.log("Infinity:", infinityNum);       // Output: Infinity
console.log("Negative Infinity:", negativeInfinity);  // Output: -Infinity
console.log("Not a Number (NaN):", notANumber); // Output: NaN

// Example 5: Checking if a Number is an Integer
console.log("\nExample 5: Checking if a Number is an Integer:");

let isInteger1 = Number.isInteger(num1);   // Check if num1 is an integer
let isInteger2 = Number.isInteger(num2);   // Check if num2 is an integer

console.log("Is num1 an integer?", isInteger1);   // Output: true
console.log("Is num2 an integer?", isInteger2);   // Output: false

// Example 6: Number Comparisons
console.log("\nExample 6: Number Comparisons:");

let num4 = 100;
let num5 = 200;

console.log("num4 < num5:", num4 < num5);   // true
console.log("num4 == num5:", num4 == num5); // false
console.log("num4 != num5:", num4 != num5); // true
