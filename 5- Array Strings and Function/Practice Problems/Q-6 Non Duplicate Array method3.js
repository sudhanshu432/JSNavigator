//complete the function mergeArray
//Do not alter the starter code.
let arr1 = [1,2,4,5,7];
let arr2 = [3,4,6,7,9,0];

function mergeArray(arr1, arr2) {
    // Merge 
    // Use of Spread Operator: let mergedArray = [...arr1]; 
    // is a cleaner way to initialize mergedArray with the elements of arr1 
    // without manually looping through it.
    
    // let mergedArray = [...arr1]; 
    let merged = arr1;
    for(let i = 0; i<arr2.length; i++){
        if(!merged.includes(arr2[i])){
            merged.push(arr2[i]);
        }
    }
    
    return merged;
}

console.log(mergeArray(arr1, arr2));
// Output : [1, 2, 4, 5, 7, 3, 6, 9, 0]

