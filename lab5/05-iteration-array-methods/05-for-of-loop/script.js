// Example using for-of loop to iterate over an array of numbers
console.log("Using for-of loop to iterate over an array:");

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log("Number:", number);
}

// Example using for-of loop to iterate over a string
console.log("\nUsing for-of loop to iterate over a string:");

const greeting = "Hello";
for (const char of greeting) {
  console.log("Character:", char);
}

// Example using for-of loop to iterate over an array of objects
console.log("\nUsing for-of loop to iterate over an array of objects:");

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old.`);
}
