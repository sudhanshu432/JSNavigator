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
const RCBIndex = teams.indexOf("RCB");
console.log("Line-44: "+ RCBIndex);
const gtIndex = teams.indexOf("GT");
console.log("Line-44: "+ gtIndex); // Output: -1 Because it is not available
const cskIndex = teams.indexOf("CSK");
console.log("Line-44: "+ cskIndex);

// includes()
const rcbincludes = teams.includes("RCB");
console.log("Line-52: "+ rcbincludes); // true
const cskIncludes = teams.includes("CSK");
console.log("Line-54: "+ cskIncludes); // true

// Slice() and splice()
console.log("Line-57: " + teams);
console.log("Line-58: " + teams.slice(2)); // remove array from starting
console.log("Line-59: " + teams); // Same output because slice create a shallow copy hence original array remain same

console.log("Line-61: " + teams.slice(-3)); // remove every thing except last 3 elements
console.log("Line-62: " + teams); // Same output because slice create a shallow copy hence original array remain same

// Splice()
// Splice (index, delete count, element to insert)
// teams.splice(2,0,"Bihar");
// console.log("Line-67: "+teams);

// teams.splice(2,1,"Bihar");
// console.log("Line-67: "+teams);

// teams.splice(2,2,"Bihar", "Patna");
// console.log("Line-67: "+teams);

// teams.splice(2,1,"Bihar", "Patna", "Dehradun");
// console.log("Line-67: "+teams);

// teams.splice(2,-1,"Bihar", "Patna", "Dehradun");
// console.log("Line-67: "+teams);


// concat()

const teams2 = ["India", "Austrailia", "New Zealand"];
const mergedTeams = teams.concat(teams2);
console.log("Line-86: "+ mergedTeams);
console.log(teams.concat(teams2));
console.log(typeof mergedTeams)
