// Arrow function that adds two numbers
const addNumbers = (a, b) => {
    return a + b;
  };
  
  // Call the arrow function and display the result in the console
  const result = addNumbers(5, 10);
  console.log("The result of addition is:", result);
  
  // Arrow function that greets a user
  const greetUser = name => {
    console.log(`Hello, ${name}!`);
  };
  
  // Call the arrow function to greet a user
  greetUser("Alice");
  greetUser("Bob");
  