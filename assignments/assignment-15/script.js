// part1

function countOfNumbers(start, end) {
    return end - start + 1;
}

console.log(countOfNumbers(1, 5));

// part2

function divisibleBySeven(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(divisibleBySeven(21));

// // while loop

function divisibleBySeven(start, end) {
    var count = 0;
    var i = start;

    while (i <= end) {
        if (i % 7 === 0) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(divisibleBySeven(1, 20));

// // part3

function numbersDivisibleBythreeandfive(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(numbersDivisibleBythreeandfive(30));

// while loop

function numbersDivisibleBythreeandfive(start, end) {
    var counter = 0;
    var i = start;

    while (i <= end) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter++;
        }
        i++;
    }
    return counter;
}

console.log(numbersDivisibleBythreeandfive(1, 30));

// // part4

function sameRange(start, end) {
    var count = 0;
    for (var i = start; i <= end; i++)
        if (i * i >= start && i * i <= end) {
            count++;
        }
    return count;
}

console.log(sameRange(10, 20));

// while loop

function sameRange(start, end) {
    var count = 0;
    var i = start;

    while (i <= end) {
        if (i * i >= start && i * i <= end) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(sameRange(10, 20));

// part5

function divisibleBythreeandfive(start, end) {
    var count = 0;
    for (var i = start; i <= end; i++) {
        if (
            (num % 3 === 0 && num % 5 !== 0) ||
            (num % 3 !== 0 && num % 5 === 0)
        ) {
            count++;
        }
    }
    return count;
}

console.log(divisibleBythreeandfive(1, 30));

// while loop

function divisibleBythreeandfive(start, end) {
    var count = 0;
    var i = start;

    while (i <= end) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(divisibleBythreeandfive(10, 30));
