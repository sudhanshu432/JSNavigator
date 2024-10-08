# Q-2 Discount Calculator - II

## Problem Statement
You are developing an online shopping website, and you want to implement a discount system based on the total purchase amount. Write a JavaScript program using if statements and operators that calculate and display the total cost after applying a discount. The discount rules are as follows:

a- If the total purchase amount is $100 or more, apply a 10% discount 
b- If the total purchase amount is between $0 (inclusive) and $99.99 (inclusive), apply a 5% discount.
c- If the total purchase amount is less than $50, no discount is applied.


#### Expected Input
200
#### Expected Output
180
#### Explanation
The amount is $200, so a 10% discount is applied: 200 - (200 * 0.10) = 180.
#### Expected Input
80
#### Expected Output
76
#### Explanation
Explanation: The amount is $80, so a 5% discount is applied: 80 - (80 * 0.05) = 76.


#### Hints:
a- Use if-else statements to check the total amount and determine the appropriate discount.
b- Convert percentage values to decimal form (e.g., 10% becomes 0.10) for the discount calculations.
 

## JS Code
```
function discountCalculator(totalAmount) {
  // a variable to store the final amount after applying the discount
  let answer;

  // Check if the total amount is 100 or more to apply a 10% discount
  // Remember: A 10% discount means you multiply the amount by 0.10 to get the discount value
  // Then subtract the discount value from the total amount to get the answer

  // Check if the total amount is between 50 and 99.99 (inclusive) to apply a 5% discount
  // Similarly, calculate 5% by multiplying the amount by 0.05 and subtract it from the total amount

  // If the total amount is less than 50, no discount is applied
  // In this case, the answer should be the same as the total amount

  // Write your code below


  // Return the final amount after applying the discount
  return answer;
}

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
