function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
    let answer;
    
    // Initialize the answer variable with the principal amount
      answer = principalAmount;
    // create and initialize a year counter to 1
      let years = 1;
  
    // Use a while loop to calculate the total amount over the specified number of years
      while (years <= numberOfYears) {
          answer += answer * annualInterestRate;
          years++;
      }
  
    // Return the final amount after all years
    return answer;
  }
  
  console.log(compoundInterest(500,0.08,5));