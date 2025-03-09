// Example using logical AND assignment (&&=)
let a = true;
let b = false;

// Using logical AND assignment (&&=)
a &&= b;
console.log(a); // Output will be false because b is false

// Example using logical OR assignment (||=)
let x = null;
let y = "Hello";

// Using logical OR assignment (||=)
x ||= y;
console.log(x); // Output will be "Hello" because x is null, so y is assigned to x

// Example using logical nullish assignment (??=)
let z = undefined;
let w = "JavaScript";

// Using logical nullish assignment (??=)
z ??= w;
console.log(z); // Output will be "JavaScript" because z is undefined, so w is assigned to z

// Another example to show behavior with different initial values
let p = 0;
let q = "Non-zero value";

// Using logical OR assignment (||=) with 0
p ||= q;
console.log(p); // Output will be "Non-zero value" because p is falsy (0), so q is assigned to p
