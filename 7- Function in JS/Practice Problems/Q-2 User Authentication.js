function main() {
    let userAuth = (function () {
      // Create an empty array to store user data.
      let registeredUsers = [];
  
      // Define the registerUser function.
      function registerUser(username, password) {
        if (checkCredentials(username, password)) {
          return "The user is already registered";
        } else {
          registeredUsers.push({ username, password });
          console.log(registeredUsers);
          return "The user have been added to the registeredUser array";
        }
      }
  
      // Define the checkCredentials function.
      function checkCredentials(username, password) {
        return registeredUsers.some(
          (user) => user.username === username && user.password === password
        );
      }
  
      // Return the functions as an object
      return {
        registerUser: registerUser,
        checkCredentials: checkCredentials,
      };
    })();
  
    // Example usage
    console.log(userAuth.registerUser("user1", "password123"));
    // Output: "The user have been added to the registeredUser array"
    console.log(userAuth.registerUser("user1", "password123"));
    // Output: "The user is already registered"
  
    return userAuth;
  }
  
  main();
  