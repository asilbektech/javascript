// part1

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combineArrays([9, 8, 7, 6, 5], [4, 3, 2, 1])); // [9,8,7,6,5,4,3,2,1]

// part2

function reverseOrder(arr1) {
    return arr1.reverse();
}

console.log(reverseOrder([1, 2, 3, 4, 5])); // [ 5, 4, 3, 2, 1 ]

// part3

function checkValue(arr1, value) {
    if (arr1.includes(value)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkValue([1, 2, 3, 4, 5], 4)); // true

// part4

function isArray(arr1) {
    if (Array.isArray(arr1)) {
        return true;
    } else {
        return false;
    }
}

console.log(isArray([77])); // true

// part5

function arraySlice(arr1, num, num1) {
    return arr1.slice(num, num1);
}

console.log(arraySlice([1, 2, 3, 4, 5, 6], 1, 3)); // [2,3]

// part6

function removeLast(arr1) {
    return arr1.pop();
}
console.log(removeLast([1, 2, 3, 4, 77])); // removing 77

// part7

function removeFirst(arr1) {
    return arr1.shift();
}

console.log(removeFirst([1, 2, 3, 4, 5, 6])); // removing 1

// part8

function addAtBeginning(arr1, value) {
    return arr1.unshift(value);
}

var arr1 = [1, 2, 3, 4, 5];
var value = arr1.unshift(0);

console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

// part9

function addAtEnd(arr1, value) {
    return arr1.push(value);
}

var arr1 = [1, 2, 3, 4, 5];
var value = arr1.push(6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
