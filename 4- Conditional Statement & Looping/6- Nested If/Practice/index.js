// nestedIf

// let num = prompt("Enter a number: ");
// if(num>50){
//     if(num%2 ==0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }

// }else{
//     console.log("Number must be greater than 50");
// }


// Problem Statement

// Check eligibility for driving license
// age >= 18 - eligible else not eligible
// passed the test - eligible and can obtain the license
// failed the test - eligible but cannot have the license
let age = prompt("Enter your age: ");
let testPassed = false;

if(age >= 18){
    console.log("Eligible");
    if(testPassed==true){
        console.log("'Congratulations!, You have got the license.");
    }else{
        console.log("Sorry, you did not clear the test.");
    }
}else{
    console.log("Not eligible for the license");
}