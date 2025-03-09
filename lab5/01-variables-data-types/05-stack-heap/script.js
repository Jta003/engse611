// Stack: Storing primitives (simple values)
console.log("Using Stack (Primitives):");

let a = 10;  // Primitive, stored in the stack
let b = a;   // b gets the value of a (primitive assignment)

// Changing 'a' does not affect 'b' because they are independent in the stack.
a = 20; 

console.log("Value of a:", a); // 20
console.log("Value of b:", b); // 10

// Heap: Storing reference types (objects, arrays, functions)
console.log("\nUsing Heap (Reference Types):");

let person1 = { name: "Alice", age: 25 };  // Object, stored in the heap
let person2 = person1;  // person2 now references the same object in the heap

// Changing a property of the object affects both person1 and person2 because they reference the same object in the heap
person1.age = 30;

console.log("Person1 age:", person1.age); // 30
console.log("Person2 age:", person2.age); // 30

// Demonstrating arrays, which are also reference types stored in the heap
let numbers = [1, 2, 3]; // Array, stored in the heap
let numbersCopy = numbers; // numbersCopy references the same array in the heap

numbers.push(4); // Modify the array

console.log("Numbers:", numbers); // [1, 2, 3, 4]
console.log("NumbersCopy:", numbersCopy); // [1, 2, 3, 4] (Changes reflect in both)
