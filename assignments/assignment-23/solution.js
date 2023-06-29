// Assignment-23

let movieCollection = {
    movies: [],
    addMovie: function (title, director, genre, year) {
        let movie = {
            title: title,
            director: director,
            genre: genre,
            year: year
        };
        this.movies.push(movie);
    },

    getMovieByTitle: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                return this.movies[i];
            }
        }
    },

    getMoviesByGenre: function (genre) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                return this.movies[i];
            }
        }
    },

    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies[i].director === update.director,
                    this.movies[i].genre === update.genre,
                    this.movies[i].year === update.year;
                return this.movies[i];
            }
        }
    },

    deleteMovie: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i] === title) {
                this.movies.splice(i, 1);
            }
        }
    },

    printMovies: function () {
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`Title: ${this.movies[i].title}`);
            console.log(`Director: ${this.movies[i].director}`);
            console.log(`Genre: ${this.movies[i].genre}`);
            console.log(`Year: ${this.movies[i].year}`);
        }
    }
};

// addMovie method

movieCollection.addMovie(
    "6 Underground",
    "Michael Bay",
    "Action/Thriller",
    2019
);

movieCollection.addMovie("Fast X", "Louis Leterrier", "Action/Adventure", 2023);

movieCollection.addMovie("Extraction 2", "Sam Hargrave", "Action", 2023);

// console.log(movieCollection);

// getMoviesByTitle method

console.log(movieCollection.getMovieByTitle("Fast X"));

// getMoviesByGenre method

console.log(movieCollection.getMoviesByGenre("Action"));

// updateMovie method

console.log(
    movieCollection.updateMovie("Fast X", {
        director: "Someone",
        genre: "Drama",
        year: 1989
    })
);

// deleteMovie Method

movieCollection.deleteMovie("6 Underground");

// printMovie method

movieCollection.printMovies();
