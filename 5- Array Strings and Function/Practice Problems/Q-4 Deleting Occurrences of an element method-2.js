function findDuplicates(arr) {
    let elementCount = {};
    let duplicates = [];

    // Count the occurrences of each element using a for loop
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (elementCount[num]) {
            elementCount[num]++;
        } else {
            elementCount[num] = 1;
        }
    }

    // Find the elements with more than one occurrence
    for (let num in elementCount) {
        if (elementCount[num] > 1) {
            duplicates.push(Number(num));
        }
    }

    return duplicates;
}

let inputArray = [12, 43, 64, 45, 35, 12, 68, 12];
console.log(findDuplicates(inputArray)); // Output: [12]
