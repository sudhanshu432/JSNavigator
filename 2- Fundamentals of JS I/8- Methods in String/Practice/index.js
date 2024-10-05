let str = 'JavaScript is wonderful!';
console.log(str._proto_);

console.log(str.charAt(1));
console.log(str.charAt(0));
console.log(str.charAt(25));

let str2 = " It is dynamically tyed.";

console.log(str.concat(str2))
console.log(str2.concat(str))

console.log(str.length);
console.log(str2.length);

console.log(str.indexOf("S"));
console.log(str2.indexOf("S"));
console.log(str.indexOf("s")); // this will return index of small S
console.log(str.indexOf("a")); 
console.log(str.indexOf("i")); 
console.log(str.indexOf("is"));  // starting index of is
console.log(str.indexOf("i", 8)); // this will check i after 8th index number
console.log(str.lastIndexOf("i"));