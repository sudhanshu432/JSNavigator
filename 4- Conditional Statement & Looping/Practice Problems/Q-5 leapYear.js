function leapYear(year) {
    let answer;
   //Write your code here
    if(year%4==0){
        answer=true;
        if(year%100==0){
            answer=false;
        	if(year%400==0){
                answer=true;
            }
        }
    }else{
        answer=false;
    }
return answer
}

console.log(leapYear(2013));
console.log(leapYear(2004));
console.log(leapYear(2100));