/* Functions in JS */

//IIFE (Immediately Invoked Function Expression )
(function (){
    console.log("IIFE");
})(); // () make this function invoked when it created

(function (a,b){
    console.log(a ** b);
})(2,3); // () make this function invoked when it created

const user = (function(){
    const userData={
        userName: "John",
        userAge: 20,
    }

    function getName(){
        console.log(userData.userName);
    }

    function updateAge(age){
        console.log(userData.userAge + age);   
    }

    return {getName, updateAge};
})();

console.log(user);
console.log(user.userData); // here user.userData is not returning that's why output will be undefined
user.getName();
user.updateAge(3);
