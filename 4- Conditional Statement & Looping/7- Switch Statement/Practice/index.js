//Control Flow Switch Statement

// Simulate a traffic light using switch

let color = "red";
// let color = "yellow";
// let color = "green";
// let color = "pink";

switch(color){
    case 'red': console.log("STOP! the light is red");
    break;
    
    case 'yellow': console.log("CAUTION! the light is yellow");
    break;

    case 'green': console.log("GO AHEAD");
    break;

    default:
        console.log("INVALID COLOR")
}