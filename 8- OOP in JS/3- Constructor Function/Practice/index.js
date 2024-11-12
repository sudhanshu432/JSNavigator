// Constructor Function
// This is not a constructor function this is a function which is equivalent to a constructor function
function movie(title, year){
    const movieObj = {
        title: title,
        year: year,
        getDetails(){
            console.log(
                `Title: ${this.title}
                Year: ${this.year}
                `
            );
        },
    };
    return movieObj;
}

const movie1 = movie("The Avengers", 2012);
console.log(movie1);
movie1.getDetails();

// const movie2 = movie("Avatar", 2018);
// console.log(movie2);
// movie2.getDetails();



// Lets see how to create a constructor function 

// Constructor Function : Name of the constructor Should be start with capital letters 
function Movie(title, year){
    this.title = title;
    this.year = year;
    
    this.getDetails = function(){
        console.log(
            `Title: ${this.title}
            Year: ${this.year}
            `
        );  
    }

}


// New key word you have to use to call constructor
const movie2 = new Movie("Avatar", 2013);
console.log(movie2);

movie2.getDetails();