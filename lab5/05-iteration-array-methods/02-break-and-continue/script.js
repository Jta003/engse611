// Example using break statement to stop the loop early
console.log("Using break statement:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at i =", i); // Display when breaking
    break; // Stops the loop when i equals 3
  }
  console.log("i =", i); // Display the current value of i
}

// Example using continue statement to skip an iteration
console.log("\nUsing continue statement:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping i =", i); // Display when skipping
    continue; // Skips the current iteration when i equals 3
  }
  console.log("i =", i); // Display the current value of i
}
