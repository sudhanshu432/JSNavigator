// Complete the genrateID function
//Do not alter the starter code
function generateID(startValue){
    //Implement Your function here
        let count = startValue; // Initialize the counter with the start value
        
        return function() {
            return `A_2023_${count++}`; // Generate the ID and increment the counter
        };
    }
    
    const func = generateID(99);
    console.log(func());//Output : A_2023_99
    console.log(func()); // Output: A_2023_100