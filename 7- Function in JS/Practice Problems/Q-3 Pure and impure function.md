# Q-3 Pure and impure function

## Problem Statement
In the given code **removeVowels** is an impure function that is used to remove all the vowels from the value property of obj.

But the removeVowels modify the original object and you don't want that.

Refactor the code to make it a pure function so that instead of modifying the original object, it returns a new Object with a modified value.

## JS Code
```
//Refactor the given impure function to pure function.
function removeVowels(obj) {
  // Hint: To make this function pure, do not modify the original obj.
  // Instead, create and return a new object with the modified value.
  obj.value = obj.value.replace(/[aeiou]/gi, "");
}

// you don't need to do anything below. 
//you can use it for testing the code.
let strObj = { value: "Hello World" };
//For pure function
//let newObj = removeVowels(strObj);
removeVowels(strObj);
console.log(strObj.value);
//console.log(newObj.value);

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
