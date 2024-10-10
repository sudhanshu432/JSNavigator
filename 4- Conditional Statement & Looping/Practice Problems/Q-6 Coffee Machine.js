function coffeeMachine(coffeeType) {
    // Initialize the variable 'answer' to store the price of the selected coffee type.
    let answer;
  
    // Convert the input coffee type to lowercase using the toLowerCase() method.
    let order = coffeeType.toLowerCase();
    // Use a switch statement to handle different coffee types and store the price in 'answer'.
    // Example:
    // case "regular":
    //     answer = "$2.50";
    //     break;
    switch(order){
        case "regular": answer = "$2.50";
        break;
        
        case "latte": answer = "$3.50";
        break;

        case "cappuccino": answer = "$4.00";
        break;

        case "espresso": answer = "$2.50";
        break;
        
            // Add a default case to handle any invalid coffee types.
        default:
            answer = "Invalid coffee type.";

    }
  
  
    // Return the value stored in 'answer'.
    return answer;
  }
  
  console.log(coffeeMachine("regular"));
  console.log(coffeeMachine("ESPRESSO"));