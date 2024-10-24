  //every, fill, findLast, findLastIndex, forEach

const inputs = [22, 13, 15, 77, 65, 98, 76, 44, 55, 65];

// 1. every: Checks if every element in the array satisfies a condition (e.g., if all elements are greater than 10)
const allGreaterThan10 = inputs.every(num => num > 10);
console.log("Are all numbers greater than 10?:", allGreaterThan10); // true

// 2. fill: Fill part of the array with a specific value (e.g., replace values from index 3 to 6 with 100)
const filledArray = [...inputs]; // Creating a copy of the original array
filledArray.fill(100, 3, 7);
console.log("Array after fill:", filledArray); // [22, 13, 15, 100, 100, 100, 100, 44, 55, 65]

// 3. findLast: Find the last element that satisfies a condition (e.g., find the last number greater than 50)
const lastGreaterThan50 = inputs.findLast(num => num > 50);
console.log("Last number greater than 50:", lastGreaterThan50); // 65

// 4. findLastIndex: Find the index of the last element that satisfies a condition (e.g., find the index of the last number greater than 50)
const lastIndexGreaterThan50 = inputs.findLastIndex(num => num > 50);
console.log("Last index of a number greater than 50:", lastIndexGreaterThan50); // 9

// 5. forEach: Perform an operation on each element (e.g., log each element and its index)
console.log("ForEach loop output:");
inputs.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
});
