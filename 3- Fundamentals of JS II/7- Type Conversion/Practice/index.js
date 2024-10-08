/** Type Conversion */
/* *** Convert to String *** */
// String();

console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString();
console.log((123).toString());
console.log(true.toString()); 
console.log(NaN.toString()); 
console.log(false.toString()); 
// console.log(null.toString()); // error
// console.log(undefined.toString()); // error



/** Convert to Number */
// Number();
console.log('***NUMBER***');
console.log(Number("123"));
console.log(Number("str")); // NaN: means(Not a Number)
console.log(Number(true));
console.log(Number(false));

// Unary + Operator --- works on Variables

let a = "123";
console.log(+a); // 123 in number

let b = "123abc";
console.log(+a); // NaN

//  parseFloat();
console.log(parseFloat('7.73')); // 7.73


// let num = 2.2;

//  parseInt();
// console.log(parseInt('773'));
console.log(parseInt('773f')); // 773
console.log(parseInt('7.73')); // 7
// console.log(parseInt('f773')); // NaN
// console.log(parseInt('f773f')); // NaN


// Convert to Boolean
// Boolean();
console.log(Boolean(1));
console.log(Boolean(100));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('123'));
console.log(Boolean('123f'));
console.log(Boolean('Sudhanshu Kumar'));


