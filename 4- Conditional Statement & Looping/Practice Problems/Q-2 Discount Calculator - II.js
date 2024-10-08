function discountCalculator(totalAmount) {
    // a variable to store the final amount after applying the discount
    let answer;
  
    // Check if the total amount is 100 or more to apply a 10% discount
    // Remember: A 10% discount means you multiply the amount by 0.10 to get the discount value
    // Then subtract the discount value from the total amount to get the answer
  
    // Check if the total amount is between 50 and 99.99 (inclusive) to apply a 5% discount
    // Similarly, calculate 5% by multiplying the amount by 0.05 and subtract it from the total amount
  
    // If the total amount is less than 50, no discount is applied
    // In this case, the answer should be the same as the total amount
  
    // Write your code below
      if(totalAmount>=100){
          answer = totalAmount-(totalAmount*0.10);
      }else if(totalAmount>=50){
          answer = totalAmount-(totalAmount*0.05);
      }else{
          answer = totalAmount;
      }
  
  
    // Return the final amount after applying the discount
    return answer;
  }
  