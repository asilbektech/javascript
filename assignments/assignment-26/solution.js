// 1. Character Pairing: Write a function that accepts a string and returns all possible pairs of characters in the input string. For this, use a nested loop to go through each possible pair of characters.

// console.log(characterPairs("abc"));
// // Expected output: ['ab', 'ac', 'bc']

function characterPairs(string) {
    let pairs = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            pairs.push(string[i] + string[j]);
        }
    }
    return pairs;
}

console.log(characterPairs("abc"));
// output: ['ab', 'ac', 'bc']

// 2. Divisible by Three Pair Sum: Create a function divisibleByThreePairSum(array) that takes an array of numbers as input. It should return an array of all the pairs of indices, where the elements sum to a multiple of three. This task will require a nested loop to go through each possible pair of numbers.

// console.log(divisibleByThreePairSum([1, 2, 3, 4, 5]));
// // Expected output: [[0, 1], [1, 3], [0, 4], [3, 4]]

function divisibleByThreePairSum(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

console.log(divisibleByThreePairSum([1, 2, 3, 4, 5])); // [ [ 0, 1 ], [ 0, 4 ], [ 1, 3 ], [ 3, 4 ] ]
