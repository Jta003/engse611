// Global Execution Context
console.log("Global Execution Context starts");

let globalVar = "I'm a global variable";  // Declared in global scope

function outerFunction() {
  // Outer Function Execution Context
  console.log("Outer function starts");
  
  let outerVar = "I'm an outer variable";  // Declared in outer function scope

  function innerFunction() {
    // Inner Function Execution Context
    console.log("Inner function starts");

    let innerVar = "I'm an inner variable";  // Declared in inner function scope

    console.log("Inside innerFunction:");
    console.log(globalVar);  // Accessing global variable
    console.log(outerVar);  // Accessing variable from outer function (lexical scope)
    console.log(innerVar);  // Accessing variable from inner function

    // This refers to the current context inside innerFunction (in non-strict mode, it would refer to the global object)
    console.log("This inside innerFunction:", this);
  }

  innerFunction();  // Call to the inner function

  console.log("Inside outerFunction:");
  console.log(globalVar);  // Accessing global variable
  console.log(outerVar);  // Accessing outer function variable
  
  // This refers to the current context inside outerFunction
  console.log("This inside outerFunction:", this);
}

outerFunction();  // Call to the outer function

console.log("Global Execution Context ends");

// This refers to the global object in non-strict mode
console.log("This in global scope:", this);
