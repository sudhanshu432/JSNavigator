// Q-8 Count Words in a String
function countWords(str) {
    let count = 0;
    str = str.trim();
    
    for(let i = 0; i<str.length; i++){
        if(str[i]===' '){
            count++;
        }
    }
    return count+1;
  }

// console.log(countWords("An extra space has been inserted after the last word of the string"));