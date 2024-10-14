//Write the program to convert tempF to into celcius and also to detect fever.
//Assign the final answer in result variable.
//Do not alter anything else given in the starter code

function main(tempF) {
    let result;
  
    // Step 1: Convert the temperature from Fahrenheit to Celsius.
    let tempC = (tempF - 32) * 5 / 9;
  
    // Step 2: Store the converted temperature in a new variable and round it to one decimal place.
    let roundedTempC = tempC.toFixed(1);
  
    // Step 3: Check if the rounded temperature is 37C or higher using if and else condition
    if (roundedTempC >= 37) {
      result = `You have a fever! Your temperature is ${roundedTempC}C.`;
    } else {
      result = `You don't have a fever. Your temperature is ${roundedTempC}C.`;
    }
  
    return result;
  }
  