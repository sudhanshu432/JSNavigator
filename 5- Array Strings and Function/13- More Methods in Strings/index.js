// More Methods in Strings
let str = 'JavaScript is a Synamically types is a language.';

// includes()
console.log(str.includes('is'));

// replace()
console.log(str.replace('is', 'was'));

// replaceAll()
console.log(str.replaceAll('a','@'));

// trim()
console.log(str.trim());

// substring()
console.log(str.substring(3)); // aScript is a Synamically types is a language.
console.log(str.substring(3,10)); // aScript 10 is excluded  or end index is excluded 
console.log(str.substring(-4)); // from 0th index to end 
console.log("Line-20: ");
console.log(str.substring(-4,12)); // from 0th index to 12-1 index
console.log("Line-22: ");
console.log(str.substring(-4,-12)); // from 0th index to 0th index

// slice(): slice() and substring() both same
console.log(str.slice(3)); // aScript is a Synamically types is a language.
// split(): Splits strings into an array
console.log(str.slice(-3)); // print last 3 elements
console.log(str.slice(-9, -3)); // -9 to -3 index
console.log(str.slice(-3, -1)); 
console.log(str.substring(-3)); // 0th to end

let words = str.split(" ");
// console.log(words);

