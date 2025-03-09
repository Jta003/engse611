// Example 1: Nested Scope with Functions
console.log("Example 1: Nested Scope with Functions:");

let outerVariable = "Outer Variable";  // Global scope

function outerFunction() {
  let outerFunctionVariable = "Outer Function Variable";  // Outer function scope
  
  function innerFunction() {
    let innerFunctionVariable = "Inner Function Variable";  // Inner function scope
    
    console.log("Inside Inner Function:");
    console.log("outerVariable =", outerVariable);  // Accessible from the outer scope
    console.log("outerFunctionVariable =", outerFunctionVariable);  // Accessible from the outer function
    console.log("innerFunctionVariable =", innerFunctionVariable);  // Accessible from the inner function
  }

  innerFunction(); // Calling the inner function
  console.log("Inside Outer Function:");
  console.log("outerVariable =", outerVariable);  // Accessible from the outer scope
  console.log("outerFunctionVariable =", outerFunctionVariable);  // Accessible from the outer function
  
  // Uncommenting the following line will throw an error because innerFunctionVariable is scoped to the inner function
  // console.log("innerFunctionVariable =", innerFunctionVariable);  // ReferenceError: innerFunctionVariable is not defined
}

outerFunction();  // Calling the outer function

// Example 2: Block Scope Inside Nested Blocks
console.log("\nExample 2: Block Scope Inside Nested Blocks:");

{
  let blockVariable = "Block Variable";  // Block scope inside outer block

  console.log("Inside Outer Block:");
  console.log("blockVariable =", blockVariable);  // Accessible within this block

  {
    let innerBlockVariable = "Inner Block Variable";  // Block scope inside inner block
    console.log("Inside Inner Block:");
    console.log("blockVariable =", blockVariable);  // Accessible from the outer block
    console.log("innerBlockVariable =", innerBlockVariable);  // Accessible from the inner block
  }

  // Uncommenting the following line will throw an error because innerBlockVariable is scoped to the inner block
  // console.log("innerBlockVariable =", innerBlockVariable);  // ReferenceError: innerBlockVariable is not defined
}

// Example 3: Function Scope Inside Block Scope
console.log("\nExample 3: Function Scope Inside Block Scope:");

{
  let blockScopedVar = "Block Scoped Variable";

  function insideBlockFunction() {
    let functionScopedVar = "Function Scoped Variable";
    
    console.log("Inside Block Function:");
    console.log("blockScopedVar =", blockScopedVar);  // Accessible from the block
    console.log("functionScopedVar =", functionScopedVar);  // Accessible from the function
  }

  insideBlockFunction();  // Calling the function inside the block

  // Uncommenting the following line will throw an error because functionScopedVar is scoped to the insideBlockFunction
  // console.log("functionScopedVar =", functionScopedVar);  // ReferenceError: functionScopedVar is not defined
}

// Example 4: Nested Arrow Functions with Lexical Scoping
console.log("\nExample 4: Nested Arrow Functions with Lexical Scoping:");

const outerArrow = () => {
  let outerArrowVariable = "Outer Arrow Variable";

  const innerArrow = () => {
    let innerArrowVariable = "Inner Arrow Variable";

    console.log("Inside Inner Arrow Function:");
    console.log("outerArrowVariable =", outerArrowVariable);  // Accessible from the outer arrow function
    console.log("innerArrowVariable =", innerArrowVariable);  // Accessible from the inner arrow function
  };

  innerArrow();  // Calling the inner arrow function

  // Uncommenting the following line will throw an error because innerArrowVariable is scoped to the inner arrow function
  // console.log("innerArrowVariable =", innerArrowVariable);  // ReferenceError: innerArrowVariable is not defined
};

outerArrow();  // Calling the outer arrow function
