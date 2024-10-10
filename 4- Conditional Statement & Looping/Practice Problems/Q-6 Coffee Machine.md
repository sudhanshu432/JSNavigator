# Q-6 Coffee Machine

## Problem Statement
Create a program that takes a customer's **coffee order as input,** converts the input to lowercase, and uses a switch statement to handle different coffee types. The program should calculate the price based on the selected coffee type and store the result in a variable named **" answer."**

#### The coffee types and their prices are as follows:
Regular: $2.50
Latte: $3.50
Cappuccino: $4.00
Espresso: $2.50
#### Expected Input
regular
#### Expected Output
$2.50
#### Expected Input
ESPRESSO
#### Expected Output
$2.50
#### Test Cases
a- Convert the input coffee type to lowercase using the .toLowerCase() method.
b- Use a switch statement to match the coffee type and store the corresponding price in the answer variable.
c- If the input does not match any coffee type, store "Invalid coffee type." in the answer.

## JS Code
```
function coffeeMachine(coffeeType) {
  // Initialize the variable 'answer' to store the price of the selected coffee type.
  let answer;

  // Convert the input coffee type to lowercase using the toLowerCase() method.
  
  // Use a switch statement to handle different coffee types and store the price in 'answer'.
  // Example:
  // case "regular":
  //     answer = "$2.50";
  //     break;

  // Add a default case to handle any invalid coffee types.

  // Return the value stored in 'answer'.
  return answer;
}

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
