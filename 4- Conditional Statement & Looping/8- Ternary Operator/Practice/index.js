//Ternary Operator
// Condition ? true : false
// let age = 18;
// age >= 18 ? console.log("You can vote") : console.log("under age"); 

let num1 = prompt("Enter the 1st number: ");
let num2 = prompt("Enter the 2nd number: ");
let num3 = prompt("Enter the 3rd number: ");
let greater =
  num1 > num2
    ? num1 > num3
      ? num1
      : num3
    : num2 > num3
    ? num2
    : num3;

// let greater;

// num1>num2 ? greater=num1 : greater=num2;

// if(num1>num2){
//     greater = num1;
// }else{
//     greater = num2;
// }

console.log(greater);

