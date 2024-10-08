/** Operators in JS */

// 5. Logical Operators (&&, ||, !)

// More on Logical Operator

// 1. undefined 
// 2. null 
// 3. NaN 
// 4. 0 
// 5. false 
// 6. " "
// These 6 things are consider as falsy value in JavaScript but 
// except these values every thing will consider as truth value
//  1-9, '_', , true all String are truthy value

// short circuit evaluation 
// console.log(1 && 3); // O/P : 3
// console.log(3 && 1); // O/P : 1

/* 
Summary:
The && operator returns the first falsy value it encounters, or if both operands are truthy, 
it returns the value of the second operand. 
That's why the result of 1 && 3 is 3 and the result of 3 && 1 is 1.
*/

// console.log(3 && 1 && 4 && 7 && 10 && 6 && 5);
// console.log(3 && 1 && 4 && 7 && 10 && 6 && undefined);
// console.log(3 && 1 && 4 && 7 && 10 && 6 && null);
// console.log(3 && 1 && 4 && 7 && 10 && 6 && NaN);
// console.log(3 && 1 && 4 && 7 && 10 && 6 && 0);
// console.log(3 && 1 && 4 && 7 && 10 && 6 && 0 && null);
// console.log(3 && 1 && 4 && 7 && 10 && 6 && "");
// console.log(3 && 1 && 4 && 7 && 10 && 6 && "-");

console.log(0 || null || undefined || false || NaN);
console.log(0 || null ||  "String" || undefined || false || NaN);

