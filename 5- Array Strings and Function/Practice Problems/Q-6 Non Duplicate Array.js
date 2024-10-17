// Q-6 Non Duplicate Array
//complete the function mergeArray
//Do not alter the starter code.
//complete the function mergeArray
//Do not alter the starter code.
arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    //Implemet your function here
    let mergedArray = [];
    // length of merged array
     for(let i = 0; i<arr1.length; i++){
        if(i<arr1.length){
            mergedArray.push(arr1[i]);
        }
     }
     let k = arr1.length;
     for(let j = 0; j<arr2.length; j++){
        if(!mergedArray.includes(arr2[j])){
            mergedArray[k] = arr2[j];
            k++;
        }
     }
    return mergedArray;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]
