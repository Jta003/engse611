// Example 1: Coercion with the + operator (String Concatenation)
console.log("Coercion with + operator:");

let num = 5;      // Number
let str = "10";   // String

// When using +, JavaScript converts the number to a string and concatenates
let result = num + str;
console.log("5 + '10' = ", result);  // Output: "510" (Number 5 is coerced to a string)

let booleanVal = true; // Boolean
let booleanResult = num + booleanVal;
console.log("5 + true = ", booleanResult);  // Output: "51" (Boolean true coerced to 1)

// Example 2: Coercion with == (Loose Equality)
console.log("\nCoercion with == (Loose Equality):");

console.log("'5' == 5:", "5" == 5);  // Output: true (String '5' coerced to number 5)
console.log("null == undefined:", null == undefined);  // Output: true (null coerced to undefined)
console.log("false == 0:", false == 0);  // Output: true (false coerced to 0)

// Example 3: Coercion in arithmetic operations
console.log("\nCoercion in arithmetic operations:");

let result1 = "10" - 5; // String '10' coerced to number
console.log("'10' - 5 = ", result1);  // Output: 5 (String '10' coerced to number)

let result2 = "20" * 2; // String '20' coerced to number
console.log("'20' * 2 = ", result2);  // Output: 40 (String '20' coerced to number)

let result3 = "20" / "4"; // Both strings coerced to numbers
console.log("'20' / '4' = ", result3);  // Output: 5 (String '20' coerced to number)

// Example 4: Coercion with Boolean context (falsy and truthy values)
console.log("\nCoercion in Boolean context:");

console.log("Boolean(''):", Boolean(''));   // Output: false (empty string is falsy)
console.log("Boolean('Hello'):", Boolean('Hello'));  // Output: true (non-empty string is truthy)
console.log("Boolean(0):", Boolean(0));    // Output: false (0 is falsy)
console.log("Boolean(1):", Boolean(1));    // Output: true (non-zero number is truthy)
