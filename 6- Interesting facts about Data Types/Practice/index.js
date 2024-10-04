// let, const, var

let age; // declare
// const pi = 3.14;

// pi = 22;

// const year;
// year = 2024;

var a = 24; // not use var  use let

/* Data Types
    1. Object
    2. Primitive Datatypes
*/

/* *********************************** *
***        Primitive DataTypes       ***
/* *********************************** */

// Number (64 bit)
let num = 85;
console.log(typeof(num));// number
let num1 = 85.2;
console.log(typeof(num1));

// String
let str = "Sudhanshu";
console.log(typeof(str));
const lastName = 'Kumar';
console.log(typeof(lastName));
const nickName = `Sudh`; // backtick
console.log(typeof(nickName));

const str1 = "Sudhanshu's Book";
console.log(str1);

const str2 = 'Sudhanshu"s Book';
console.log(str2);

const str3 = `lore m
                                j 
                                            kjne `;
console.log(str3);

// Boolean
let bool = false;
console.log(typeof bool);

// Undefined
let b;
console.log(typeof b);
console.log(b);


// Null
let c = null;
console.log(c);
console.log(typeof c); // object but why think about it
// this is a bug in JavaScript 



// Symbol(ES6/2015)

// BigInt(ES2020)
 let num3 = 10n;
 console.log(typeof num3); 

//  Interesting things
// let Number = 89;
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 10);

let num4 = Infinity;
console.log(12/0);
console.log(Infinity/0);
console.log(0/Infinity);
console.log(180/Infinity);