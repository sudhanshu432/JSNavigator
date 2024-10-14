# Q-9 Composite Number

## Problem Statement
Write a javascript program to check if a number is composite or not. A composite number is a natural number or a positive integer that has more than two factors.

#### Expected Input
20
#### Expected Output
true
##### Explanation
20 has factors 1, 2, 4, 5, 10, and 20. Since it has more than two factors, it is composite.
#### Expected Input
13
#### Expected Output
false
#### Explanation
13 has only two factors, 1 and 13, so it is not composite (it is a prime number).


#### Definition Recap:
a- A composite number is a number that has more than two factors.
b- A number that is not composite includes prime numbers (which have exactly two factors: 1 and the number itself) and the number 1 (which has only one factor).


#### Test cases
a- If the number is composite, the program should store true in the variable answer.
b- If the number is not composite, the program should store false in the variable answer.


#### Hints:
To check if a number is composite, you can use a loop to count the number of factors the number has. If the count of factors exceeds 2, the number is composite.


## JS Code
```
function Composite(number) {
  let answer; // This variable will store the result (true or false)

  // Initialize a variable to count the number of factors

  // Loop through all integers from 1 up to 'number'.
  // Increment the count for each integer that is a divisor of 'number'.

  // After the loop, check if the count of factors is more than 2

  // Return the result
  return answer;
}

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
