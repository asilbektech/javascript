// part1

function arrayOfNumbers(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(arrayOfNumbers(11, 15));

// while loop

function arrayOfNumbers(start, end) {
    var result = [];
    var i = start;

    while (i <= end) {
        result.push(i);
        i++;
    }
    return result;
}

console.log(arrayOfNumbers(1, 20));

// part2

function arraySeven(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(arraySeven(1, 100));

// while loop

function arraySeven(start, end) {
    var arr = [];
    var i = start;

    while (i <= end) {
        if (i % 7 === 0) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(arraySeven(1, 100));

// part3

function arrayOfNumbers2(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(arrayOfNumbers2(1, 200));

// while loop

function arrayOfNumbers2(start, end) {
    var arr = [];
    var i = start;

    while (i <= end) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(arrayOfNumbers2(1, 200));

// part4

function arrayOfPositiveNumbers(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        var square = i * i;
        if (square >= start && start <= end) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(arrayOfPositiveNumbers(2, 9));

// while loop

function arrayOfPositiveNumbers(start, end) {
    var arr = [];
    var i = start;

    while (i <= end) {
        var square = i * i;

        if (square >= start && start <= end) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(arrayOfPositiveNumbers(2, 9));

// part5

function arrOfNumbers(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(arrOfNumbers(1, 20));

// while loop

function arrayOfNumbers3(start, end) {
    var result = [];
    var i = start;

    while (i <= end) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            result.push(i);
        }
        i++;
    }

    return result;
}

console.log(arrayOfNumbers3(1, 20));
