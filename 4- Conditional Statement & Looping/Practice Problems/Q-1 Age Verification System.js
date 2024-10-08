function checkEligibility(age) {
    let answer;
    //Write your code here
    if(age>=18){
        answer="granted";
    }else{
        answer="denied";
    }
    return answer;
  }
  
  //for testing if the function is working properly
//   console.log(checkEligibility(17));