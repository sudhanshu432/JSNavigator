function lowerCaseString(str1, str2) {
    // Convert both strings to lowercase
    let firstNameLower = str1.toLowerCase();
    let lastNameLower = str2.toLowerCase();
    
    // Concatenate the lowercase strings
    let answer = firstNameLower + lastNameLower;
    
    // Return the concatenated string
    return answer;
}

// Example usage:
let firstName = "JOHN";
let lastName = "DOE";
let username = lowerCaseString(firstName, lastName);
console.log("Username:", username); // Output: johndoe
