function main(){

  const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    city: "New York",
    street: "123 Main St",
    zipCode: "10001"
  }
};
const userProfile2 = {
  name: "Marry Jane",
  email: "marry.jane@example.com",
  address: {
    city: "L.A",
    street: "154, washington road",
    block: '0101',
    zipCode: "10011"
  }
};

function getUserDetail(profile, keys) {
  // Implement your function here
    let result = profile;
/*
if (result && key in result):

This condition checks two things:
result: Ensures result is a valid object (i.e., not null or undefined).
key in result: Checks if the current key exists as a property in result.
If both conditions are true, we proceed to the next line; otherwise, 

if either is false, it means the property doesn't exist, and we return "Not available".
*/
  for (const key of keys) {
    if (result && key in result) {
      result = result[key];
    } else {
      return "Not available";
    }
  }

  return result;

}


console.log(getUserDetail(userProfile, ["address", "city"]));
// Usage: should return "New York"
//do not modify the return statement
return getUserDetail;
}