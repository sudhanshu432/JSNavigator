// Default Parameters

function sum(num1 = 0, num2 = 0){
    // console.log("Sum of the numbers is: "+ num1+num2); // Input: sum(2,3) | Output: 23 
    // console.log("Sum of the numbers is: "+ (num1+num2)); //Input: sum(2,3) | Output: 5
    console.log(`Sum of the number is: ${num1 + num2}`); //Input: sum(2,3) | Output: 5
}
sum(2,3);
sum(4);
sum();