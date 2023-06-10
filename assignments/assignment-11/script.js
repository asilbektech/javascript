// 1

function addTwo(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result = addTwo(20, 10);
console.log(result); // 30

// 2

function multiplyTwo(num1, num2) {
    var product = num1 * num2;
    return product;
}
var result = multiplyTwo(2, 5);
console.log(result); // 10

// 3

function isOdd(num) {
    var result = num % 2 !== 0;
    return result;
}
console.log(isOdd(12)); // false

// 4

function subtractTwo(num1, num2) {
    var difference = num1 - num2;
    return difference;
}

var result = 9 - 3;
console.log(result); // 6

// 5

function divideTwo(num1, num2) {
    var quotient = num1 / num2;
    return quotient;
}

var result = 9 / 3;
console.log(result); // 3

// 6

function isEven(num) {
    var result = num % 2 === 0;
    return result;
}

var result = isEven(11);
console.log(result); // false

// 7

function maxValue(num1, num2) {
    if (num1 > num2) {
        result = num1;
    } else {
        return num2;
    }
    return result;
}
console.log(maxValue(57, 37)); // 57 > 37

// 8

function minValue(num1, num2) {
    if (num1 < num2) {
        result = num1;
    } else {
        return num2;
    }
    return result;
}

console.log(minValue(1, 2)); // 1 < 2

// 9

function absoluteValue(num) {
    var result = Math.abs(num);
    return result;
}

console.log(Math.abs(-50)); // 50

// 10

function roundNumber(num) {
    var result = Math.round(num);
    return result;
}

console.log(Math.round(9.6)); // 10

// 11

function ceilNumber(num) {
    var result = Math.ceil(num);
    return result;
}

console.log(Math.ceil(10.1)); //11

// 12

function floorNumber(num) {
    var result = Math.floor(num);
    return result;
}

console.log(Math.floor(12.7)); // 12

// 13

function modulus(num1, num2) {
    var remainder = num1 % num2;
    return remainder;
}

console.log(modulus(27, 4)); // 3 // 24 / 4 = 6
