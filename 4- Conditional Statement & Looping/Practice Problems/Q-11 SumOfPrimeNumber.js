function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i<num; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

function sumOfPrimeNumbers(limit) {
  let answer = 0; // Variable to store the sum of all prime numbers

  // Iterate through all numbers from 0 to the given limit
    for(let i = 1; i<limit; i++){
        if(isPrime(i)){
            answer += i;
        }
    }
 
     // Inside the first loop create a variable to count the number of divisors of i

    // Check how many numbers divide i without a remainder by using nested loop
   

    // If count equals 2, then i is a prime number
  
  

  // Return the sum of all prime numbers between 0 and limit
  return answer;
}

// console.log(sumOfPrimeNumbers(50));