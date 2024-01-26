const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },
  { title: "Star Wars", director: "George Lucas", year: "1977" },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  { title: "Top Gun", director: "Tony Scott", year: "1986" },
  { title: "Justice League", director: "Zack Snyder", year: "2021" }
];

// Part 1 - Create a function to find a movie and output it's detail

/*function findMovie(movieTitle){
  for(let movie of movies){
    if (movie.title === movieTitle){
      
      console.log(`${movie.title} ${movie.director} ${movie.year}`)
    }
  console.log(movie)
  }
}
var movie = "Thor: Ragnorok";




console.log(movie)
findMovie(movie)*/ 

// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle){
  for(let movie of movies){
    if(movie.title === movieTitle){
      return movie;
      
    }
    console.log(movie)
  }

 // console.log("Any text, any at all")
 return "Movie not found"

 
}

var myMovie = returnMovie("Avengers: Infinity War");
console.log(`${myMovie.title} ${myMovie.director} ${myMovie.year}`)

var myOtherMovie = returnMovie("Jaws");
//console.log(myOtherMovie)

function myMovieDetails(anyMovie){
  if (typeof(anyMovie) === "object"){
    return "Movie"
  }
  return anyMovie

}
console.log(myMovieDetails(returnMovie("Jaws")));

