//complete the reverseString Function.
//Do not alter the starter Code.

function reverseString(str){
    //Implement Your function here
    let reversed = "";
    for(let i = str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
    console.log(reverseString("Hello"));
    //Output : "olleH"