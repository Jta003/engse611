// Example 1: JSON.stringify() - Convert JavaScript Object to JSON String
console.log("Example 1: JSON.stringify() - Convert JavaScript Object to JSON String:");

let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Convert JavaScript object to JSON string
let jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);


// Example 2: JSON.parse() - Convert JSON String to JavaScript Object
console.log("\nExample 2: JSON.parse() - Convert JSON String to JavaScript Object:");

let jsonResponse = '{"name": "Alice", "age": 25, "city": "London"}';

// Convert JSON string to JavaScript object
let parsedObject = JSON.parse(jsonResponse);
console.log("Parsed Object:", parsedObject);


// Example 3: JSON.stringify() with Pretty Print (Formatting)
console.log("\nExample 3: JSON.stringify() with Pretty Print (Formatting):");

let formattedJsonString = JSON.stringify(person, null, 2); // 'null' is for filtering and '2' is for indentation
console.log("Formatted JSON String:");
console.log(formattedJsonString);


// Example 4: JSON.stringify() with Property Filter (Selective Conversion)
console.log("\nExample 4: JSON.stringify() with Property Filter (Selective Conversion):");

let filteredJsonString = JSON.stringify(person, ["name", "city"]);
console.log("Filtered JSON String:", filteredJsonString);  // Only "name" and "city" will be included in the JSON string


// Example 5: Handling JSON in Web APIs (Simulating a Web API Call)
console.log("\nExample 5: Handling JSON in Web APIs (Simulating a Web API Call):");

let apiResponse = `{
  "status": "success",
  "data": {
    "user": "Bob",
    "email": "bob@example.com"
  }
}`;

let apiParsed = JSON.parse(apiResponse);
console.log("API Response Parsed:", apiParsed);

// Simulating sending JSON data back to server
let requestData = {
  action: "save",
  user: "Alice",
  data: {
    age: 30,
    city: "Paris"
  }
};

let jsonRequest = JSON.stringify(requestData);
console.log("JSON Data Sent to Server:", jsonRequest);


// Example 6: Invalid JSON Parsing Error
console.log("\nExample 6: Invalid JSON Parsing Error:");

let invalidJsonResponse = '{"name": "Charlie", age: 35'; // Missing closing bracket
try {
  let invalidParsed = JSON.parse(invalidJsonResponse);
} catch (error) {
  console.log("Error parsing invalid JSON:", error.message);
}

