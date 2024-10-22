/* Functions in JS */

// Function Declaration
function sum(a, b){
    return a+b;
}

const ans = sum(5, 6);
console.log(ans);

console.log(sum1(2,3));

//Function Declaration
function sum1(a, b){
    return a+b;
}

// console.log(sum2(1, 8));
// Function expression
const sum2 = function (a, b){
    return a+b;
};
console.log(sum2(1, 8));

// Arrow function
// var product = (a,b) => {
//     return a*b;
// }

var product = (a,b) => a*b;


console.log(product(5,5));