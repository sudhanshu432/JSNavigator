# Q-4 Email Validation using && operator

## Problem Statement
You have already completed the email validation program using "||" operator. Now modify the code and rewrite the conditions to validate the email using the "&&" operator.

#### Additionally, include one more condition that:
a- Email should have at least 3 characters before “@.”
b- If the email is valid, store the value of the email in the result variable with a welcome message. If the email is invalid, store the string "invalid email" in the result variable.
#### Expected Input
 xyz@gmail.com
#### Expected Output
 Welcome xyz@gmail.com to our site
#### Expected Input
 xz@gmail.com
#### Expected Output
 invalid email
#### Test Cases
#### Dot should be at least 4 characters after "@": 
Ensure that the dot " . " in the domain name appears at least 4 characters after the "@" symbol. This means there should be at least three characters between "@" and the dot (e.g., @abc.).
#### Check for a valid email: 
Verify that the function correctly identifies and processes a valid email by including the email in the output message.
#### Check for an invalid email: 
Verify that the function correctly identifies and outputs "invalid email" for an invalid email.
#### Check for the size of the email: 
Ensure that the email has at least 3 characters before the "@" symbol.
#### Check for the "@" symbol: 
Ensure that the email contains the "@" symbol and that it is positioned correctly.
#### Check for the length after the dot: 
Verify that there are at least 2 characters after the last dot " . " in the email domain.

## JS Code
```
function main(email) {
  let result;

  // Step 1: Find the index of "@" in the email
  

  // Step 2: Find the index of the last dot "." in the email
  

  // Step 3: Calculate the length of the email
 

  // Step 4: Validate the email
  // Check if there are at least 3 characters before the "@" symbol
  // Ensure there is a dot "." at least 4 characters after "@"
  // Make sure there are at least 2 characters after the last dot "."
  
  // If all conditions are met, assign a welcome message with email name to result
  // If any condition fails, assign "invalid email" to result
     
  

  // Return the final result
  return result;
}

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
