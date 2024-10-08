/** Operators in JS */

// 5. Logical Operators (&&, ||, !)
// let grade = 70;
// let scholarship = 80;
// let eligible = (grade >60) && (scholarship > 70);
// console.log(eligible);

// let m1 = 55;
// let m2 = 65;
// let m3 = 45;
// let eligibility = m1>60 || m2 >60 || m3>60;
// console.log(eligibility);

// let rightTOVote = true;
// console.log(!rightTOVote);

// let rightTOVote = false;
// console.log(!rightTOVote);

console.log(1 && 3); // O/P : 3
console.log(3 && 1); // O/P : 1

/* 
Summary:
The && operator returns the first falsy value it encounters, or if both operands are truthy, 
it returns the value of the second operand. 
That's why the result of 1 && 3 is 3 and the result of 3 && 1 is 1.
*/