// Rest Vs Spread Operator

const aprilBatch = ['Tina', 'Madhur'];
const mayBatch = ['Ritik', 'Deepak', "Shalini"];
const julyBatch = [];

// function addStudent(batch, student){
//     batch.push(student);
//     console.log(batch);
// }

// addStudent(aprilBatch,"Sudhanshu");
// addStudent(mayBatch,"Monu");
// addStudent(julyBatch,"Sonu");

// Rest Operator : Notation- ...   eg: ...students : this will create an array

function addStudents(batch, ...students){
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}

addStudents(aprilBatch, "Sudhanshu", "Sonu", "Monu", "Ritu", "Sheena");


// Spread ... 

// const newBatch = mayBatch;
const newBatch = [...mayBatch]; // Shallow copy  due to sprade operator eg: ...mayBatch
console.log("Line-32 "+ newBatch);
// console.log("Line-33 "+ newBatch[0]);

mayBatch.push("newStudent");
console.log("Line-36: "+mayBatch);
console.log("Line-37: "+ newBatch);

// Concatenate
const mergedBatch  = [...mayBatch, ...aprilBatch];
console.log(mergedBatch);