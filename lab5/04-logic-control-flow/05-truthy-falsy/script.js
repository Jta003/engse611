// Example: Truthy and Falsy values

let values = [
    false,
    0,
    "",
    null,
    undefined,
    NaN,
    "hello",          // Non-empty string is truthy
    1,                // Non-zero number is truthy
    {},               // Empty object is truthy
    []                // Empty array is truthy
  ];
  
  values.forEach(value => {
    if (value) {
      console.log(`'${value}' is truthy.`);
    } else {
      console.log(`'${value}' is falsy.`);
    }
  });
  