# Q-11 Calculating Total Price
You run a shopping mall and store customer list you use a nested object consisting of different objects. Create a function calculatePrice which should take an object as its parameter. It should be able to calculate the total price after taking price and quantity into account for each product.
#### Expected Input
const goods = {
apple: { price: 150, quantity: 2 },
banana: { price: 75, quantity: 3 },
orange: { price: 125, quantity: 1 }
}
#### Expected Output
650
## Problem Statement

## JS Code
```
//complete the calculatePrice function
//Do not alter the starter code
const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};
function calculatePrice(goods) {
  // Hint 1: Initialize a variable to store the total price, e.g., let totalPrice = 0;
    
  // Hint 2: Use a for-in loop to iterate over the properties (items) in the goods object
  // for (let item in goods) { ... }
    
  // Hint 3: Use object destructuring to extract the price and quantity of each item

  // Hint 4: Calculate the total price for each item and add it to the totalPrice

  // Hint 5: Return the totalPrice after the loop
}
console.log(calculatePrice(goods));
//output : 650

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.
