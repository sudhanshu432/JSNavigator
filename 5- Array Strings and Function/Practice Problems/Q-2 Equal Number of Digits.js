function commonDigits(num1, num2){
    // Function to count the number of digits in a number
        function countDigit(num) {
            let count = 0;
            while (num > 0) {
                // Divide by 10 and use Math.floor to remove the decimal part
                num = Math.floor(num / 10); 
                count++;
            }
            return count;
        }
    
        // Count the digits of num1 and num2
        const digitsNum1 = countDigit(num1);
        const digitsNum2 = countDigit(num2);
    
        // Check if the number of digits are equal
        let answer = digitsNum1 === digitsNum2;
    
        return answer;
    }
    
    let num1 = 78574;
    let num2 = 78392;
    
    // let num3 = 74847
    // let num4 = 781
    console.log(commonDigits(num1, num2));
    // console.log(commonDigits(num3, num4));