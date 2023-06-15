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

// part3

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

// part4

function sameRange(start, end) {
    var count = 0;
    for (var i = start; i <= end; i++)
        if (i * i >= start && i * i <= end) {
            count++;
        }
    return count;
}

console.log(sameRange(10, 20));

// part5

function divisibleBythreeandfive(start, end) {
    var count = 0;
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            count++;
        }
    }
    return count;
}

console.log(divisibleBythreeandfive(1, 30));
