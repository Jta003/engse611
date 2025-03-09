// Example using ternary operator to check if someone is an adult
const age = 20;

const result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result);

// Another example: using ternary operator to check if a number is even or odd
const number = 7;

const parity = number % 2 === 0 ? "The number is even." : "The number is odd.";
console.log(parity);

// Ternary operator with multiple conditions
const weather = "sunny";

const activity = weather === "sunny" ? "Go for a walk." :
                 weather === "rainy" ? "Take an umbrella." :
                 "Stay inside and relax.";
console.log(activity);
