// Example 1: Using Object Spread to Copy Properties
console.log("Example 1: Using Object Spread to Copy Properties:");

let user = {
  name: "John",
  age: 30,
  country: "USA",
};

// Copy all properties from `user` to a new object `userCopy`
let userCopy = { ...user };
console.log("Original User:", user);
console.log("Copied User:", userCopy);

// Example 2: Using Object Spread to Merge Objects
console.log("\nExample 2: Using Object Spread to Merge Objects:");

let userInfo = {
  name: "Alice",
  occupation: "Engineer",
};

let userLocation = {
  city: "New York",
  country: "USA",
};

// Merge both objects into a new object `fullUserInfo`
let fullUserInfo = { ...userInfo, ...userLocation };
console.log("Merged User Info:", fullUserInfo);

// Example 3: Overriding Properties with Object Spread
console.log("\nExample 3: Overriding Properties with Object Spread:");

let defaultSettings = {
  theme: "light",
  language: "English",
};

let userSettings = {
  theme: "dark",  // This will override the default theme
  notifications: true,
};

// Merge and override properties using spread
let mergedSettings = { ...defaultSettings, ...userSettings };
console.log("Merged and Overridden Settings:", mergedSettings);

// Example 4: Nested Objects and Object Spread
console.log("\nExample 4: Nested Objects and Object Spread:");

let profile = {
  user: {
    name: "Bob",
    age: 40,
  },
  settings: {
    theme: "dark",
    notifications: false,
  },
};

// Using spread to copy nested objects
let newProfile = {
  ...profile,
  user: {
    ...profile.user, // Spread inside nested object
    email: "bob@example.com",  // Adding a new property
  },
};

console.log("Original Profile:", profile);
console.log("New Profile with Updated User Info:", newProfile);

// Example 5: Using Object Spread with Methods
console.log("\nExample 5: Using Object Spread with Methods:");

let person = {
  name: "Charlie",
  age: 28,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Spread object and add a new method
let newPerson = {
  ...person,
  introduce() {
    console.log(`Hi! I'm ${this.name}, and I am ${this.age} years old.`);
  },
};

console.log("New Person Object:", newPerson);
newPerson.greet();      // Method from original object
newPerson.introduce();  // New method added with spread

// Example 6: Using Object Spread for Function Arguments
console.log("\nExample 6: Using Object Spread for Function Arguments:");

function updateUserProfile(userObj) {
  const updatedProfile = {
    ...userObj,
    status: "active",
    lastLogin: new Date(),
  };
  console.log("Updated Profile:", updatedProfile);
}

let userProfile = {
  name: "Dave",
  age: 35,
  country: "Canada",
};

updateUserProfile(userProfile); // Pass object with spread to update user profile
