# Q-1 Refactoring the code

## Problem Statement
For the given code, refactor and create all the functions with **ES6 Arrow functions**

#### Hint:

Here is the syntax for writing an Arrow function:  

The given code already has one function that has been converted to an arrow function.

## JS Code
```
// Do not modify the main function
//Convert the functions present inside main to ES6 standard(i.e. to arrow function)  
function main() {
  let yearData = {};

  //Arrow function
  let createPerYearData = (year, total) => {
    yearData[year] = total;
  };

  //convert it to arrow function
  function printReport() {
    console.log("Print Report");
  }
	
  //convert it to arrow function
  function calculateTotalTillDate(perYearBalance) {
    let total = 0;
    for (let i = 0; i < perYearBalance.length; i++) {
      total += perYearBalance[i];
    }
    return total;
  }

  //convert it to arrow function
  function adjustTotalOfYear(year, adjustmentFactor) {
    yearData[year] *= adjustmentFactor;
  }
  
  //Do not modify the code after this
  return {
    createPerYearData,
    printReport,
    calculateTotalTillDate,
    adjustTotalOfYear
  };
}

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.