// Write a function that takes two arguments starts and end returns the count of numbers between start and end that divisble by and 14

function fourAndFourteen(start, end) {
    var counter = 0;
    for (i = start; i <= end; i++) {
        if (i % 4 === 0 && i % 14 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

// Write a function that takes two arguments start and end, that returns count of numbers which the square is also within the same range.

function squareCount(start, end) {
    var counter = 0;
    for (i = start; (i = end); i = i + 1) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter = counter + 1;
        } else {
            break;
        }
    }
    return counter;
}

console.log(squareCount(20, 500));

// Write a function that takes two arguments, start and end, and returns the count of numbers between start and end that are divisible by either 3 or 5, but not both simultaneously.

function threeOrFive(start, end) {
    var counter = 0;
    for (i = start; i < end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter++;
        }
    }
    console.log(threeOrFive());
}

//  Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by 7.

function arraySeven(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (num % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by both 3 and 5.

function arrayOfNumbers(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
