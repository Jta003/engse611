// Example 1: Block Scope with `let` and `const`
console.log("Example 1: Block Scope with `let` and `const`:");

{
  let a = 10;  // a is scoped to this block
  const b = 20;  // b is scoped to this block
  console.log("Inside Block: a =", a, "b =", b);
}

// Uncommenting the following lines will throw an error because `a` and `b` are out of scope
// console.log("Outside Block: a =", a);  // ReferenceError: a is not defined
// console.log("Outside Block: b =", b);  // ReferenceError: b is not defined


// Example 2: Block Scope with `var` (Function Scope)
console.log("\nExample 2: Block Scope with `var` (Function Scope):");

{
  var x = 30;  // x is scoped to the function or global, not the block
  console.log("Inside Block: x =", x);
}

console.log("Outside Block: x =", x);  // `x` is accessible outside the block


// Example 3: `let` in Loops (Block Scope)
console.log("\nExample 3: `let` in Loops (Block Scope):");

for (let i = 0; i < 3; i++) {
  console.log("Inside Loop: i =", i);
}

// Uncommenting the following line will throw an error because `i` is block-scoped
// console.log("Outside Loop: i =", i);  // ReferenceError: i is not defined


// Example 4: `const` in Loops (Block Scope)
console.log("\nExample 4: `const` in Loops (Block Scope):");

for (const j = 0; j < 3; j++) {
  console.log("Inside Loop: j =", j);
}

// `const` in loops also creates block scope, but cannot be re-assigned, hence the above code will throw an error
// Uncommenting the following line will throw an error because `j` is block-scoped and `const` cannot be reassigned
// console.log("Outside Loop: j =", j);  // ReferenceError: j is not defined


// Example 5: Nested Blocks with Block Scope
console.log("\nExample 5: Nested Blocks with Block Scope:");

let outerVar = "outer";

{
  let innerVar = "inner";  // Block-scoped variable inside the outer block
  console.log("Inside Outer Block: outerVar =", outerVar, "innerVar =", innerVar);

  {
    let innerMostVar = "innermost";  // Nested block-scoped variable
    console.log("Inside Nested Block: innerMostVar =", innerMostVar);
  }

  // Uncommenting the following line will throw an error because `innerMostVar` is scoped to the nested block
  // console.log("Outside Nested Block: innerMostVar =", innerMostVar);  // ReferenceError: innerMostVar is not defined
}

// Uncommenting the following line will throw an error because `innerVar` is scoped to the outer block
// console.log("Outside Outer Block: innerVar =", innerVar);  // ReferenceError: innerVar is not defined
