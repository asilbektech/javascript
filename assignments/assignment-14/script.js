// part1
function printNumber() {
    for (var i = 11; i <= 99; i++) {
        console.log(i);
    }
}
// for (var i = 11; i <= 99; i++) console.log(i);

// part2

function printAllNumber() {
    for (var i = 6; i <= 76; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}

for (var i = 6; i <= 76; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// part3

function numbersDivisibleBythreeandfive() {
    for (var i = 1; i <= 99; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

for (var i = 1; i <= 99; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

console.log(i);

// part4

function calculateAndPrint() {
    for (var i = 20; i <= 40; i++) {
        var printSquares = i * i;
        console.log(printSquares);
    }
}

for (var i = 20; i <= 40; i++) {
    var printSquares = i * i;
    console.log(printSquares);
}

// part5

function printNumbersDivisible() {
    for (var i = 1; i <= 99; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            console.log(i);
        }
    }
}

for (var i = 1; i <= 99; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
        console.log(i);
    }
}
