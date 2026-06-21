// Creates an empty array to hold list of movies
let arrMovies = [];

// This function will take input from user and add it to the div
function addMovie(){
    // This is shortcut/nickname for text input
    let txtMovie = document.getElementById("txtMovie");
    // Gets movie name and removes any leading/trailing spaces
    let movieName = txtMovie.value.trim();

    // Checks to see ig movie is empty
    if (movieName != ""){
        // If user enters movie name it adds it to end of array using push
        arrMovies.push(movieName);
        // Clears out text box soo user can easily add another movie
        txtMovie.value="";
        // Will clear the displayed text after list is reset
        document.getElementById("divMovies").innerHTML = "Movie added!";
    }
}

// Function will show movies in array
function showMovies(){
    // Shortcut/nickname for movies div
    let divMovies = document.getElementById("divMovies");
    // Will sort list of movies to ensure list is always sorted
    arrMovies.sort();
    // This will convert array of movies into a string using join, will be separated by HTML line break - br
    divMovies.innerHTML = arrMovies.join("<BR>");
}

// Function will remove movies and update div with a empty movie list
function resetMovieList(){
    // Resets arraay by setting it equal to []
    arrMovies = [];
    // This will add a text that list was emptied and encourage user to add new movies
    document.getElementById("divMovies").innerHTML = "List has been emptied. Please add more movies!";
}