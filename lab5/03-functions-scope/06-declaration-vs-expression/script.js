// Example 1: Variable Declarations (using `let`, `const`, and `var`)
console.log("Example 1: Variable Declarations (using let, const, var):");

let x = 10;  // Declaration and assignment in one step (declaration of x)
const y = 20;  // Declaration and assignment for a constant variable
var z = 30;  // Function-scoped declaration using var

console.log("x =", x);  // 10
console.log("y =", y);  // 20
console.log("z =", z);  // 30


// Example 2: Function Declaration vs Function Expression
console.log("\nExample 2: Function Declaration vs Function Expression:");

// Function Declaration (hoisted)
function greetDeclaration() {
  console.log("Hello from Function Declaration!");
}

// Function Expression (not hoisted)
const greetExpression = function() {
  console.log("Hello from Function Expression!");
};

greetDeclaration();  // Works even before it's called
greetExpression();   // Works after assignment

// Uncommenting the following line will cause an error because function expressions are not hoisted
// greetExpressionBefore();  // TypeError: greetExpressionBefore is not a function

// Example 3: Variable Declaration with Function Expression
console.log("\nExample 3: Variable Declaration with Function Expression:");

let add = function(a, b) {  // This is a function expression
  return a + b;
};

console.log("Sum of 2 and 3:", add(2, 3));  // 5


// Example 4: Conditional Expression
console.log("\nExample 4: Conditional Expression (Ternary Operator):");

let age = 21;
let eligibility = age >= 18 ? "Eligible" : "Not Eligible";  // Ternary expression

console.log("Eligibility:", eligibility);  // Eligible


// Example 5: Class Declaration vs Class Expression
console.log("\nExample 5: Class Declaration vs Class Expression:");

// Class Declaration
class PersonDeclaration {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new PersonDeclaration("John", 25);
person1.introduce();  // Hi, I'm John and I'm 25 years old.

// Class Expression
const PersonExpression = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
};

const person2 = new PersonExpression("Jane", 30);
person2.introduce();  // Hi, I'm Jane and I'm 30 years old.


