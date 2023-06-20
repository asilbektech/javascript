// 1. String Index Multiplier
// Create a function named stringIndexMultiplier that accepts an array of strings as an argument. This function should return the total sum of the product of each string's length and its index in the array.

function stringIndexMultiplier(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var length = arr[i].length;
        var product = length * i;
        sum += product;
    }
    return sum;
}

console.log(stringIndexMultiplier(["Hello", "world", "Test"]));

// 2. Create a function named divisibilityFilter that accepts an array of numbers as an argument. The function should return a new array that only includes the numbers from the original array that are divisible by 3 or 5, but not both.

function divisibilityFilter(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var divisibleBy3 = arr[i] % 3 === 0;
        var divisibleBy5 = arr[i] % 5 === 0;

        if ((divisibleBy3 || divisibleBy5) && !(divisibleBy3 && divisibleBy5)) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(divisibilityFilter([3, 5, 15, 18, 20, 30]));

// 3. Create a function named singleDigitSum that accepts an array of numbers as an argument. This function should return the sum of all numbers in the array that have only one digit. Note that the numbers can be both positive and negative.

function singleDigitSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var absValue = Math.abs(arr[i]);
        if (absValue < 10) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(singleDigitSum([-10, 1, -2, 30, 6, -7]));

// 4. Create a function named binaryCounter that accepts an array of 0s and 1s as an argument. The function should return a two-element array showing the count of 0s and 1s in the original array, in the form: [numberOfZeroes, numberOfOnes].

function binaryCounter(arr) {
    var zeroes = 0;
    var ones = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroes++;
        } else if (arr[i] === 1) {
            ones++;
        }
    }
    return [zeroes, ones];
}

console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1]));

// 5. Create a function named uniqueStringFilter that accepts an array of strings as an argument. The function should return a new array that includes only unique strings from the original array. Note that strings are considered the same regardless of case, so "Hello" and "hello" should be treated as duplicates.

function uniqueStringFilter(arr) {
    var str = [];
    var lowerCaseArr = [];
    for (var i = 0; i < arr.length; i++) {
        var lowerCaseWord = arr[i].toLowerCase();
        if (!lowerCaseArr.includes(lowerCaseWord)) {
            lowerCaseArr.push(lowerCaseWord);
            str.push(arr[i]);
        }
    }
    return str;
}
console.log(
    uniqueStringFilter([
        "Hello",
        "hello",
        "World",
        "World",
        "WORLD",
        "hello",
        "HELLO",
        "Test",
        "Test"
    ])
);

// 6. Create a function named oddNumberSum that accepts an array of numbers as an argument. The function should return the sum of all odd numbers in the array.

function oddNumberSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 7. Create a function named reverseString that accepts a an array of english letters as an argument. Return a new reversed array. Do not use reverse() or toReversed() methods.

function reverseString(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseString(["H", "e", "l", "l", "o"]));

// 8. Create a function named calculateFactorial that accepts a number as an argument. The function should return the factorial of the number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

function calculateFactorial(n) {
    var factorial = 1;
    for (var i = n; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial(5));

// 9. Task: Create a function named arrayElementMultiplier that accepts an array of numbers. The function should return a new array where each element is twice the value of the corresponding element in the original array.

function arrayElementMultiplier(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

console.log(arrayElementMultiplier([1, 2, 3, 4, 5]));

// 10. Create a function named evenIndexSum that accepts an array of numbers as an argument. The function should return the sum of numbers which are located at even indices in the array.

function evenIndexSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum;
}

console.log(evenIndexSum([10, 20, 30, 40, 50]));
