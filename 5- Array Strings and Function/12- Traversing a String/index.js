// String Traversal
function countChars(str, ch){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str.charAt(i)=== ch){
            count++;
        }
    }
    console.log(`Occurrences of character ${ch} is: ${count}`);
    // return count;
}

let str = "JavaScript is an amazing language.";

// for(let i = 0; i<str.length; i++){
//     // console.log(str[i]);
//     console.log(str.charAt(i));
// }

//frequency of 'a' in the given String
// let count = 0;
// for(let i = 0; i<str.length; i++){
//     if(str.charAt(i)=='a'){
//         count++;
//     }
// }

// console.log(count);

let charToFind = 'a';
countChars(str, charToFind);
