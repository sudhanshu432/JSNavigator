// Methods in Arrays I
const cities = ["Mumbai", "Delhi", "Calcutta", "Jaipur", "Chennai"];

console.log(cities.length);
console.log(cities);
cities[2] = "Kolkata";
console.log(cities);

// Methods on Arrays

// Adding n Element
// Push
const teams = ["CSK", "RCB", "MI", "LSG"];
// teams.push("GT");
console.log(teams);
const pushReturn = teams.push("GT");
console.log("Line-17: " + pushReturn); // this line return length after pushing one element

// unshift
// teams.unshift("KKR");
console.log(teams);
const unshiftReturn = teams.unshift("KKR");
console.log("Line-23: " + unshiftReturn);  // this line return length after unshift one element

// Removing an element
// Pop
// teams.pop();
console.log(teams);
const popReturn = teams.pop();
console.log("Line-30: " + popReturn);  // this line return poped element eg: GT

// shift
// teams.shift();
console.log(teams);

const shiftReturn = teams.shift();
console.log("Line-37: " + shiftReturn);   // this line return shift element eg: CSK
console.log(teams);


// Check the element is present or not
// indexOf()

// includes()

// Slice() and splice()

// concat()
