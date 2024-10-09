function main(email) {
  let result;

  // Step 1: Find the index of "@" in the email
    const atIndex= email.lastIndexOf('@');
  

  // Step 2: Find the index of the last dot "." in the email
    const dotIndex= email.lastIndexOf('.');

  

  // Step 3: Calculate the length of the email
    const emailLen = email.length;
    const lastIndex = emailLen-1;

 

  // Step 4: Validate the email
  // Check if there are at least 3 characters before the "@" symbol
  // Ensure there is a dot "." at least 4 characters after "@"
  // Make sure there are at least 2 characters after the last dot "."
    if(atIndex>2 && dotIndex>atIndex+4 && dotIndex < lastIndex-2){
        result = "Welcome "+email +" to our site";
    }else{
        result = "invalid email";
    }
  
  // If all conditions are met, assign a welcome message with email name to result
  // If any condition fails, assign "invalid email" to result
     
  

  // Return the final result
  return result;
}

  
console.log(main("sudhanshukumar432@gmail.com"));