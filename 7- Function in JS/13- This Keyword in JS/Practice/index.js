// this: We Can Say This is a Hidden Parameters of every function
// pointer to the object
'use strict'
console.log(this);

// var user = "Sudhanshu";

// console.log(window.user);

function checkThis(){
  console.log(this);
}

checkThis();

const user1 = {
  userName: "Sudhanhsu",

  work: function (){
    console.log(this);
  }
}
user1.work();

const user2 = {
  userName: "Amit",
};

user2.work= user1.work;
console.log(user2);

user2.work();