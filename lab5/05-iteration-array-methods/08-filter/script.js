// Example: Using filter to get even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function(element) {
  return element % 2 === 0; // Keep only even numbers
});

console.log(evenNumbers);  // Output: [2, 4, 6, 8, 10]
