// Example: Using map to add a new property to objects

let people = [
    { name: "John", age: 28 },
    { name: "Jane", age: 35 },
    { name: "Tom", age: 17 },
    { name: "Alice", age: 24 }
  ];
  
  let updatedPeople = people.map(person => {
    return {
      ...person,
      isAdult: person.age >= 18  // Add a new property based on age
    };
  });
  
  console.log(updatedPeople);
  