function sumOfEvenNumbers(limit) {
    // Initialize sum to store the sum of even numbers
    let result = 0;
  
    // Iterate through numbers from 1 to the given limit
      for(let i = 1; i<= limit; i++){
         // Check if the current number is even
          if(i%2 == 0){
                // If even, add it to the sum
              result += i;
          }
      }
      
    // Return the sum of even numbers
    return result;
  }
  
  // console.log(sumOfEvenNumbers(6));