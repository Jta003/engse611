// Example: Logical Operators in JavaScript

let a = true;
let b = false;
let c = 0;  // Falsy value
let d = "hello";  // Truthy value

// AND operator (&&)
if (a && b) {
  console.log("Both a and b are truthy.");
} else {
  console.log("At least one of a or b is falsy.");
}

// OR operator (||)
if (a || b) {
  console.log("At least one of a or b is truthy.");
} else {
  console.log("Both a and b are falsy.");
}

// NOT operator (!)
if (!c) {
  console.log("c is falsy.");
}

if (!d) {
  console.log("d is falsy.");
} else {
  console.log("d is truthy.");
}

// Combining logical operators
let isAdult = true;
let hasTicket = false;

if (isAdult && hasTicket) {
  console.log("You can enter the event.");
} else if (isAdult || hasTicket) {
  console.log("You are either an adult or have a ticket.");
} else {
  console.log("You cannot enter the event.");
}

