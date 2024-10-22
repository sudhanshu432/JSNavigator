/* Functions in JS */

//IIFE (Immediately Invoked Function Expression )
(function (){
    console.log("IIFE");
})(); // () make this function invoked when it created

(function (a,b){
    console.log(a ** b);
})(2,3); // () make this function invoked when it created