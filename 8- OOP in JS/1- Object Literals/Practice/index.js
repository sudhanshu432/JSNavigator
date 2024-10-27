/* 1- Object Literals */
const movie = {
    title: "The Avengers",
    year:2012,
    genre: "Action, Sci-Fi, Thriller",
    // cast:["Robert Downey Jr., Chris Evans"],
    cast: {
        main_lead: 'Robert Downey Jr.',
        others: 'Chris Evans',
      },

    getDetails: function(){
        console.log(`Title: ${movie.title} \nYear: ${movie.year} \nGener: ${movie.genre} \nCast: ${movie.cast}`);
    },

    getMovDetails: function(detail){
        // console.log(movie[detail]);
        console.log(movie.detail); // undefined
    }
};

console.log(movie.title);
movie.getDetails()

let detail = "year";

movie.getMovDetails(detail);

console.log(movie.cast.main_lead)