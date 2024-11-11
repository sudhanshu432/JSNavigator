/* 1- Object Literals */
const movie1 = {
    title: "The Avengers",
    year:2012,
    genre: "Action, Sci-Fi, Thriller",
    // cast:["Robert Downey Jr., Chris Evans"],
    cast: {
        main_lead: 'Robert Downey Jr.',
        others: 'Chris Evans',
      },
      
    getDetails(){
        console.log(`
            Title: ${this.title} \n
            Year: ${this.year} \n
            Gener: ${this.genre} \n
            Cast: ${this.cast}`);
    },
};

movie1.getDetails()

const movie2 = {
    title: "Movie2",
    year:2018,
    genre: "Action, Sci-Fi, Thriller",
    // cast:["Robert Downey Jr., Chris Evans"],
    cast: {
        main_lead: 'Robert Downey Jr.',
        others: 'Chris Evans',
      },
      
    getDetails(){
        console.log(`
            Title: ${this.title} \n
            Year: ${this.year} \n
            Gener: ${this.genre} \n
            Cast: ${this.cast}`);
    },
};

movie2.getDetails()

// Suppose you have to create  more numbers of objects then it is hard to create it because you have to 
// define same thing again and again in case of object literal so you can use object constructors to do the same which makes your work easy


// let detail = "year";

// movie.getMovDetails(detail);

// console.log(movie.cast.main_lead)

