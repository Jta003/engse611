// Example 1: Defining an Object Literal
console.log("Example 1: Defining an Object Literal:");

let person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  greet: function() { // Method within an object
    console.log("Hello, " + this.name);
  },
};

console.log("Person Object:", person);
person.greet();  // Calling the method within the object


// Example 2: Accessing Object Properties (Dot Notation and Bracket Notation)
console.log("\nExample 2: Accessing Object Properties:");

console.log("Name (Dot Notation):", person.name);
console.log("Age (Dot Notation):", person.age);

// Using bracket notation for dynamic property access
let property = "city";
console.log("City (Bracket Notation):", person[property]);


// Example 3: Modifying Object Properties
console.log("\nExample 3: Modifying Object Properties:");

person.age = 35;  // Modify a property using dot notation
console.log("Updated Age (Dot Notation):", person.age);

person["city"] = "Los Angeles";  // Modify using bracket notation
console.log("Updated City (Bracket Notation):", person.city);


// Example 4: Adding New Properties to an Object
console.log("\nExample 4: Adding New Properties to an Object:");

person.country = "USA";  // Adding new property
console.log("Added Country:", person.country);


// Example 5: Using Object Methods to Access or Modify Properties
console.log("\nExample 5: Using Object Methods:");

let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  getCarInfo: function() {
    return `${this.brand} ${this.model}, Year: ${this.year}`;
  },
  setCarModel: function(newModel) {
    this.model = newModel;
  },
};

console.log("Car Info:", car.getCarInfo());  // Call method to get information
car.setCarModel("Model X");  // Call method to modify property
console.log("Updated Car Info:", car.getCarInfo());


// Example 6: Object Destructuring
console.log("\nExample 6: Object Destructuring:");

let student = {
  name: "Alice",
  age: 25,
  major: "Computer Science",
};

// Destructuring object properties
let { name, age, major } = student;
console.log("Destructured Values:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Major:", major);


// Example 7: Object Spread Operator
console.log("\nExample 7: Using the Object Spread Operator:");

let employee = {
  id: 101,
  name: "Sarah",
  position: "Developer",
};

// Creating a new object by spreading the properties of `employee`
let newEmployee = { ...employee, department: "Engineering", status: "Active" };
console.log("New Employee Object with Spread:", newEmployee);


// Example 8: Object.assign() Method
console.log("\nExample 8: Using Object.assign() Method:");

let defaultSettings = {
  theme: "light",
  language: "en",
};

let userSettings = {
  theme: "dark",  // Overwrite the theme
  notifications: true,
};

// Merge `userSettings` into `defaultSettings`
let mergedSettings = Object.assign({}, defaultSettings, userSettings);
console.log("Merged Settings:", mergedSettings);

