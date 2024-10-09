/** 5- Email Validation Solution */

// sudhanshukumar432@gmail.com
// 1. Input an Email
// 2. Length of the mail>11
// 3. After last'.' only 2 or 3 Character are allowed
// 4. Minimum 3 Character between '@' and last '.'

// Input 
const email = prompt("Enter the email address: ");
const emailLen = email.length;
const dotIndex = email.lastIndexOf('.');
const atIndex = email.lastIndexOf('@');
const lastIndex = emailLen - 1;

// console.log(email);
// console.log("Email length: " +emailLen);
// console.log(". ka index: "+dotIndex);
// console.log("@ ka index: "+atIndex);
// console.log("lastIndex: "+lastIndex);


if (
    emailLen >= 11 &&                            // Email length should be > 11
    atIndex > 0 &&                               // '@' should not be the first character
    dotIndex > atIndex + 2 &&                    // '.' should come after '@' with at least 2 or 3 characters in between
    (lastIndex - dotIndex === 2 || lastIndex - dotIndex === 3) // '.' should be followed by 2 or 3 characters
) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
