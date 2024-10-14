function sumOfPrimeNumbers(limit) {
    let answer = 0; // Variable to store the sum of all prime numbers
  
    // Iterate through all numbers from 2 to the given limit (prime numbers start from 2)
    for (let i = 2; i <= limit; i++) {
      let isPrime = true; // Assume the current number is prime
  
      // Check how many numbers divide i without a remainder using a nested loop
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false; // i is not prime if it is divisible by j
          break; // No need to check further, break the loop
        }
      }
  
      // If isPrime is still true, then i is a prime number
      if (isPrime) {
        answer += i; // Add the prime number to the sum
      }
    }
  
    // Return the sum of all prime numbers between 0 and the limit
    return answer;
  }
  
  // Sample Input
  let limit = 50;
  
  // Calculate and output the sum of prime numbers up to the limit
  let result = sumOfPrimeNumbers(limit);
  console.log(result); // Expected Output: 328
  