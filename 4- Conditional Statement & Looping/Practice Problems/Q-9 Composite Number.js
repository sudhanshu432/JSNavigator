function Composite(number) {
    let answer; // This variable will store the result (true or false)
  
    // Initialize a variable to count the number of factors
      let count = 0;
    // Loop through all integers from 1 up to 'number'.
      for(let i = 1; i<=number; i++){
          if(number%i === 0){
                // Increment the count for each integer that is a divisor of 'number'.
              count++;
          }
      }
  
    // After the loop, check if the count of factors is more than 2
      if(count >2){
          answer = true;
      }else{
          answer = false;
      }
  
    // Return the result
    return answer;
  }
  
  // console.log(Composite(13));