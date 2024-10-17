//complete the function mergeArray
//Do not alter the starter code.
arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];

function mergeArray(arr1, arr2) {
    // Merge both arrays
    let mergedArray = arr1.concat(arr2);
    
    // Use a Set to remove duplicates while preserving order
    let uniqueArray = [];
    let seen = new Set();

    for (let element of mergedArray) {
        if (!seen.has(element)) {
            uniqueArray.push(element);
            seen.add(element);
        }
    }
    
    return uniqueArray;
}

console.log(mergeArray(arr1, arr2));
// Output : [1, 2, 4, 5, 7, 3, 6, 9, 0]
