const Students = [
    'Tina',
    'Raj',
    'Bobby',
    'Seema',
    'Alex',
    'Sita',
];

// for(let i = 0; i<Students.length; i++){
//     console.log(`Roll No ${i+1} : ${Students[i]}`);
// }

// console.log("Line-14: "+ Students['1']);

// // for .. in loop
// for(let i in Students){
//     // console.log(typeof i); // String
//     // let j = parseInt(i);
//     // console.log(`Roll No ${(j+1)} : ${Students[i]}`);
    
//     console.log(`Roll No ${(Number(i)+1)} : ${Students[i]}`);
    
// }


// For . of loop

for(let student of Students){ // here student is the element of array and it acts as a iterator 
    console.log(student);
}