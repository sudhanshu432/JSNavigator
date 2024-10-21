# Q-1 Closure Generator

## Problem Statement
Create a closure function that generates unique registration numbers in the following format:

- A_2023_1   // For first call
- A_2023_2   // For second call
- A_2023_3   // For third call

#### Requirements
The function generateID should take a parameter as a start value.
It should return a function which, when called each time, should generate the next ID.

#### Input:
- let getID = generateID(2)
- getID()
- getID()

#### Output:
- A_2023_2
- A_2023_3


## JS Code
```
// Complete the genrateID function
//Do not alter the starter code

function generateID(startValue){
//Implement Your function here
   
}

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
