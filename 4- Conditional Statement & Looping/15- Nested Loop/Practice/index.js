// /** Nested If statements */

// // Check eligibility for driving license
// // age>=18 - eligible else not eligible
// // passed the test - eligible and can obtain the license
// // failed the test - eligible but cannot have the license

// let age = 16;
// let testPassed = false;

// if (age >= 18) {
//   console.log('Eligible for the license.');
//   if (testPassed) {
//     console.log(
//       'Congratulations!, You have got the license.'
//     );
//   } else {
//     console.log('Sorry, you did not clear the test.');
//   }
// } else {
//   console.log('Not eligible for the license');
// }


/** Nested Loops */
/* print multiplication Table of 4*/

// let num = 4;

for (let num = 2; num <= 10; num++) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
    }
    console.log('*********');
  }
  