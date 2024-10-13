function calculateDiscount(amount) {
    let discount;

    switch (true) {
        // case typeof amount !== 'number' || amount < 0:
        //     discount = "Invalid Input";
        //     break;
        case amount < 500:
            discount = "No Discount";
            break;
        case amount >= 500 && amount < 1000:
            discount = "10% Discount";
            break;
        case amount >= 1000 && amount < 2000:
            discount = "20% Discount";
            break;
        case amount >= 2000 && amount < 4000:
            discount = "30% Discount";
            break;
        case amount >= 4000 && amount < 5000:
            discount = "40% Discount";
            break;
        case amount >= 5000:
            discount = "50% Discount";
            break;
        default:
            discount = "Invalid Input";
    }

    return discount;
}

// Example 
// console.log(calculateDiscount(750));   // Output: "10% Discount"
// console.log(calculateDiscount(1500));  // Output: "20% Discount"
// console.log(calculateDiscount(3000));  // Output: "30% Discount"
// console.log(calculateDiscount(-100));  // Output: "Invalid Input"
// console.log(calculateDiscount("500")); // Output: "Invalid Input"

/*
The switch (true) construct is used to evaluate multiple conditions. 
In a typical switch statement, you check a specific value. 
But here, we use true to allow each case to evaluate logical conditions (like amount < 500, amount >= 500, etc.).
When one of these conditions is true, the corresponding block is executed.
*/

/*
The first condition checks if the input is invalid:
typeof amount !== 'number' checks if the input is not a number (like a string).
amount < 0 checks if the input is a negative number, which is not valid for purchase amounts.
If either of these conditions is true, discount is set to "Invalid Input", and the break statement exits the switch block.
*/