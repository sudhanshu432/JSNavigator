/** Reduce Function */

// reduce(callBackFunction, initial value);

// function redFn(accumulator, currentValue, currentIndex, arr)

const inputs = [2, 3, 4, 5, 6];

// const sum = inputs.reduce((total, num, index)=>{
//     console.log(index +":"+total);
//     return total + num;
// }, 0);

// console.log(sum);

// const sum = inputs.reduce(fn);
// function fn(total, num, i, arr){
//     // console.log(arr);
//     // console.log(i); // 1,2,3,4
//     // console.log(num); // 3,4,5,6
//     console.log(total); // 2
// }

const sum = inputs.reduce(fn);
function fn(total, num, i, arr){
    // console.log(arr);
    // console.log(i); // 0, 1,2,3,4
    // console.log(num); // 2, 3,4,5,6
    // console.log(total); // 0
console.log(i +":"+total);
    return total+num; // 20
}

console.log(sum);
