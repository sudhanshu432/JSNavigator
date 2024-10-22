// Function returning functions

function greet(message){
  return function (wishes){
    console.log(`${wishes}, ${message}`);
  }
}

// const greeting = greet("I hope you are doing well");
// // console.log(greeting);
// // console.log(greeting("Hello"));
// greeting("Hello");

greet("Welcome to JavaScript")("Hii");