const library = [
    {
        title: "Animal Farm",
        author: "George Orwell",
        yearPublished: 1945,
        genre: "Political",
        ratings: [
            { id: 3, score: 7 },
            { id: 2, score: 6 },
            { id: 1, score: 9 }
        ]
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        yearPublished: 1932,
        genre: "Science fiction, Dystopian fiction",
        ratings: [
            { id: 2, score: 7 },
            { id: 4, score: 9 },
            { id: 1, score: 8 }
        ]
    },
    {
        title: "Catch-22",
        author: "oseph Heller",
        yearPublished: 1961,
        genre: "Dark comedy, Absurdist fiction",
        ratings: [
            { id: 1, score: 6 },
            { id: 2, score: 7 },
            { id: 3, score: 8 },
            { id: 5, score: 9 }
        ]
    }
];

let users = [
    { name: "Bobby", id: 1 },
    { name: "Mike", id: 2 },
    { name: "Chris", id: 3 },
    { name: "Alejandro", id: 4 },
    { name: "Ron", id: 5 }
];

function findTheUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return "Sorry I can't find this user in our Library system";
}

console.log(findTheUser(1));
console.log(findTheUser(2));
console.log(findTheUser(3));
console.log(findTheUser(4));
console.log(findTheUser(5));
console.log(findTheUser(7));
