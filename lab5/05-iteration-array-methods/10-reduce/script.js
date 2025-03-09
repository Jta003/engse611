// Example: Using reduce to sum all elements in an array

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;  // Add the current value to the accumulator
}, 0);  // Initial value for accumulator is 0

console.log(sum);  // Output: 15
