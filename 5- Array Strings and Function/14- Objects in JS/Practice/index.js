const student = {
    name: "Alex",
    age: 10,
    hobby: "Dancing",
    100: "hundred",
    show: function(){ // Anonymous function: function without name
        console.log("This is the Student details section");
    },
};

console.log(student.name);
console.log(student.age);
console.log(student.hobby);
// console.log(student.100);
console.log(student.show);
console.log(student);
console.log(student["name"]);
console.log(student["100"]);
console.log(student[100]);
student.show();

// By default keys are strings 
