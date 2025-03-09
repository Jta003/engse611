// Example: Nested else-if statements

let age = 25;
let income = 40000;
let education = "Bachelor's Degree";

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age <= 25) {
  console.log("You are a young adult.");
  
  if (income < 20000) {
    console.log("You are still in the early stages of your career.");
  } else if (income >= 20000 && income <= 50000) {
    console.log("You have a moderate income for a young adult.");
  } else {
    console.log("You have a good income for a young adult.");
  }
} else if (age > 25 && age <= 40) {
  console.log("You are an adult.");

  if (education === "Bachelor's Degree") {
    console.log("You likely have a bachelor's degree.");
  } else if (education === "Master's Degree") {
    console.log("You likely have a master's degree.");
  } else {
    console.log("You may or may not have a degree.");
  }
} else {
  console.log("You are older than 40.");
}

