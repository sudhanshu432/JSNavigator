/**Filter Function */

const inputs = [4, 10, 2, -3, -2, 5, 9, -1];

const positives = inputs.filter(nonNegativeNumbers);

function nonNegativeNumbers(num){
    // if(num>0){
    //     return num;
    // }
    return num>0;
}

console.log(`Original Array: ${inputs}`)
console.log(`Only Positive Numbers: ${positives}`);

const negativeNumbers = inputs.filter(negative);
function negative(num){
    return num<0;
}

console.log(`Original Array: ${inputs}`);
console.log(`Only Negative Numbers: ${negativeNumbers}`);