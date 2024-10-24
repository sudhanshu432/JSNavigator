/** JS Higher Order Functions */

//map()

const inputs = [2, 4, 6, 8, 7];

// inputs.map(fn);

// function fn(){
    
// }

// const squaredArray = inputs.map(function (currentElement, index, arr){
//     return currentElement * currentElement;
// });

// console.log(squaredArray);

const squaredArray = inputs.map((num)=> num*num);

console.log(squaredArray);
