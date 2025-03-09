// Example showing different data types in JavaScript
console.log("Data Types in JavaScript:");

let str = "Hello, World!";  // String
let num = 42;               // Number
let isActive = true;        // Boolean
let unknown;                // Undefined (variable declared but not initialized)
let emptyValue = null;      // Null (explicitly set to null)
let person = { name: "Alice", age: 25 }; // Object
let uniqueSymbol = Symbol('id'); // Symbol
let bigIntNumber = 1234567890123456789012345678901234567890n; // BigInt

// Output the types using typeof
console.log("Type of str:", typeof str);             // string
console.log("Type of num:", typeof num);             // number
console.log("Type of isActive:", typeof isActive);   // boolean
console.log("Type of unknown:", typeof unknown);     // undefined
console.log("Type of emptyValue:", typeof emptyValue); // object (special case)
console.log("Type of person:", typeof person);       // object
console.log("Type of uniqueSymbol:", typeof uniqueSymbol); // symbol
console.log("Type of bigIntNumber:", typeof bigIntNumber); // bigint
