// Q-7 Sum of Array
function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0 && arr[i]%5 != 0){
            sum += arr[i];
        }
    }
        return sum;
}

let arr = [1,6,8,3,5,20,10];
console.log(sumOfArray(arr));
              