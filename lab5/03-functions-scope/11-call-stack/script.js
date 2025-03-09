// A simple recursive function to demonstrate call stack
function firstFunction() {
    console.log("Inside firstFunction");
    secondFunction();
    console.log("Exiting firstFunction");
  }
  
  function secondFunction() {
    console.log("Inside secondFunction");
    thirdFunction();
    console.log("Exiting secondFunction");
  }
  
  function thirdFunction() {
    console.log("Inside thirdFunction");
  }
  
  console.log("Starting call stack demonstration...");
  firstFunction();
  console.log("End of call stack demonstration.");
  