function lastDigit(num1, num2){
    let lastDig1 = num1%10;
    let lastDig2 = num2%10;
    if(lastDig1 == lastDig2){
        return true;
    }else{
        return false;
    }
}

console.log(lastDigit(14009,249));