function studentAges(ages) {
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    let average = sum / ages.length;
    return average;
}

console.log(studentAges([20, 22, 36]));

// Create a function that takes an array of Numbers. Return the greatest number from array.
// Input  : [45, 56, -19, 900, -345, 0, 67, 30]
// Output : 900

function findGreatestNumber(numbers) {
    let greatestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (greatestNumber < numbers[i]) {
            greatestNumber = numbers[i];
        }
    }
    return greatestNumber;
}

// Create a function that takes the same size(length) two  arrays. Return true if both arrays are structural the same.
// Input: [1,2,3], [1,2,3] => Output: true
// Input: [1,2,4], [1,2,3] => Output: false

function twoArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(twoArray([1, 2], [1, 3]));

// Create a function that takes two objects it can be different sizes, check if both objects structural the same
// Input: {a:1, b:2, c:5} {c:5, b:2, a:1} Output: true

function isSameObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isSameObj({ a: 1, b: 2, c: 5 }, { c: 5, b: 2, a: 1 }));
console.log(isSameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4 }));
console.log(isSameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4, f: 9 }));
