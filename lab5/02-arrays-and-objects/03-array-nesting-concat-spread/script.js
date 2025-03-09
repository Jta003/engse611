// Example 1: Array Nesting
console.log("Example 1: Array Nesting:");

let nestedArray = [1, 2, [3, 4, [5, 6]]];  // An array with nested arrays
console.log("Nested Array:", nestedArray);

// Accessing elements in the nested array
console.log("Accessing nested element (nestedArray[2]):", nestedArray[2]);
console.log("Accessing deeply nested element (nestedArray[2][2][0]):", nestedArray[2][2][0]);

// Example 2: Array Concatenation (using concat method)
console.log("\nExample 2: Array Concatenation using concat method:");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

// Concatenate arrays
let concatenatedArray = array1.concat(array2, array3);
console.log("Concatenated Array:", concatenatedArray);

// Concatenating elements with other values
let mixedConcatArray = array1.concat(10, [11, 12]);
console.log("Concatenated with numbers:", mixedConcatArray);


// Example 3: Using Spread Operator to Flatten an Array
console.log("\nExample 3: Using Spread Operator to Flatten Array:");

let arrayWithNestedArrays = [1, 2, [3, 4], [5, 6]];

// Flatten using spread operator
let flattenedArray = [...arrayWithNestedArrays[0], ...arrayWithNestedArrays[1], ...arrayWithNestedArrays[2], ...arrayWithNestedArrays[3]];
console.log("Flattened Array with Spread:", flattenedArray);

// Example 4: Using Spread Operator to Merge Arrays
console.log("\nExample 4: Merging Arrays using Spread Operator:");

let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
let arrayC = [7, 8, 9];

// Merging arrays using spread
let mergedArray = [...arrayA, ...arrayB, ...arrayC];
console.log("Merged Array using Spread:", mergedArray);

// Example 5: Adding New Elements to an Array using Spread
console.log("\nExample 5: Adding New Elements to an Array using Spread:");

let initialArray = [1, 2, 3];
let newArray = [...initialArray, 4, 5];  // Adds 4 and 5 to the end of the array
console.log("New Array after adding elements:", newArray);


// Example 6: Combining Arrays and Nested Arrays using Spread
console.log("\nExample 6: Combining Nested Arrays using Spread:");

let arrayX = [10, 20];
let arrayY = [30, 40, [50, 60]];

// Combine arrays and flatten nested arrays using spread
let combinedArray = [...arrayX, ...arrayY, ...arrayY[2]];
console.log("Combined Array (flattened):", combinedArray);

