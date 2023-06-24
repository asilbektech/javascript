// Assignment-22

// task 1

let movie = {
    title: "Fast X",
    director: "Louis Leterrier",
    releaseYear: "2023",
    genre: "Action",
    rating: "13"
};

// task 2

console.log(movie.title); // Fast X
console.log(movie["title"]); // Fast X

console.log(movie.director); // Louis Leterrier
console.log(movie["director"]); // Louis Leterrier

console.log(movie.releaseYear); // 2023
console.log(movie["releaseYear"]); // 2023

console.log(movie.genre); // Action
console.log(movie["genre"]); // Action

console.log(movie.rating); // 13
console.log(movie["rating"]); // 13

// task 3

console.log(movie.produser); // undefined because we don't have produser property
console.log(movie["produser"]);

// task 4

movie.rating = 5;

console.log(movie.rating); // 5
console.log(movie["rating"]); // 5

// task 5

movie.boxOffice = "480 million";

console.log(movie.boxOffice); // 480 million
console.log(movie["boxOffice"]); // 480 million

// task 6

delete movie.boxOffice;

console.log(movie.boxOffice); // undefined because we deleted boxOffice property
console.log(movie["boxOffice"]); // undefined because we deleted boxOffice property

function extraChallenge(movie) {
    console.log(
        `The movie ${movie.title} was directed by ${movie.director} and was released in ${movie.releaseYear}. It is a ${movie.genre} film with a rating of ${movie.rating}.`
    );
}

extraChallenge(movie); // The movie Fast X was directed by Louis Leterrier and was released in 2023. It is a Action film with a rating of 5.
