# Q-2 User Authentication

## Problem Statement
You are required to build a user authentication system for a web application Using the IIFE.

#### Requirements

1. Create an empty array called **registeredUsers** to store user data.

2. Create an IIFE that returns an object with two functions:

**registerUser:** registerUser(username, password):

(i) It should take two parameters "username" and "password" and add them to the **registeredUsers** array.

(ii) Call the **checkCredentials**  function to determine if the user is already present in the **registeredUsers** array. 

(iii) If the user is already registered then return **`The user is already registered`** otherwise push the user object to the registeredUsers array and return **`The user have been added to the registeredUser array`**.  

**checkCredentials:**
checkCredentials(username, password): 

(i)It should take two arguments, "username" and "password".

(ii) Check whether the user with the given credentials is present in the registeredUsers array or not. It should return false if the user is not present otherwise true.


#### Input:
userAuth.registerUser('testuser', 'password123');
userAuth.registerUser('testuser','password123');

#### Output:
The user have been added to the registeredUser array
The user is already registered

## JS Code
```
function main() {

  let userAuth = (
    function () {
      // Create an empty array to store user data.

      // Define the registerUser function.
      

      // Define the checkCredentials function.
      

      // Return the functions as an object
    }
  )();

  // Example usage
  console.log(userAuth.registerUser("user1", "password123")); 
  // Output: "The user have been added to the registeredUser array"
  console.log(userAuth.registerUser("user1", "password123")); 
  // Output: "The user is already registered"

  return userAuth;
}

```
## Modifications
Make necessary adjustments to the JS code to achieve the expected output.


Source Code:
https://docs.google.com/document/d/1gTZzQKm2AdOoYguxjHpkwL1sGoLaFEXnnSUjHL7wLrg/edit?usp=sharing