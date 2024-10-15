function addExpense(newExpense , originalExpenseArray) {
    originalExpenseArray.push(newExpense);
   
    return originalExpenseArray;
    
}

let originalExpenseArray = [340 , 567 , 434 , 653];
let newExpense = 543; 

console.log(addExpense(newExpense , originalExpenseArray));