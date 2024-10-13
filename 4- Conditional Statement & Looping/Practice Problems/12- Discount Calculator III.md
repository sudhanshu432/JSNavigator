# Discount Calculator III

## Problem Statement
You run an e-commerce website where you offer different discounts based on the amount purchased by the customer.
Create a program that calculates the discount offer depending on the given amount and stores the calculated discount in the discount variable

#### Requirements:
Use a switch statement to evaluate the purchase amount.

Based on the amount, set the discount variable to the following values:

1- If the amount is less than 500, then the value of the discount should be "No Discount." 

2- If the amount is greater than or equal to 500 and less than 1000, then the value of the discount should be "10% Discount."

3- If the amount is greater than or equal to 1000 and less than 2000, then the value of the discount should be "20% Discount."

4- If the amount is greater than or equal to 2000 and less than 4000, then the value of the discount should be "30% Discount."

5- If the amount is greater than or equal to 4000 and less than 5000, then the value of the discount should be "40% Discount."

6- If the amount is greater than or equal to 5000, then the value of the discount should be "50% Discount."

7- If none of these conditions is met (e.g., if the input is not a valid number), the function sets the discount to "Invalid Input."


#### Hints:
Use switch (true) to evaluate the conditions and assign the correct discount based on the amount.

#### Example:
- For an amount of 750, the function should set the discount to "10% Discount.".
- For an amount of 1500, the function should set the discount to "20% Discount.".
- For an amount of 3000, the function should set the discount to "30% Discount.".
- For an invalid input, such as a string or a negative number, the function should set the discount to "Invalid Input.".


## JS Code
```
// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
function calculate(amount) {
    let discount;
  
    // write your code here
  
    return discount;
  }

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
