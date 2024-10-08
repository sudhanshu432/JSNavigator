//Convert the type to numbers
//Calculate the discountedprice
function shoppingDiscountCalculator(originalValue,discountPercentage){
    let answer;
    answer = parseFloat(originalValue)-(parseFloat(originalValue)*parseFloat(discountPercentage)/100);


return answer;
    }