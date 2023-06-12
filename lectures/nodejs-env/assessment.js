// create a function threeAndFive that takes the number as argument and checks if this number divisible by four and seven at the same time

function threeAndFive(number) {
    if (number % 4 === 0 && number % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(threeAndFive(34));
console.log(threeAndFive(14));
console.log(threeAndFive(28));

// create a function that two string and returns that string that have more characters.
// "Hello", "Hi"
function longerStr(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    } else {
        return str2;
    }
}

console.log(34 > 7); // true
console.log(7 > 34); // false

// Create funtion that takes three numbers and checks if the sum of the first two is greater then multipication of the last two 3, 4, 6 3+4 4*6  7  24

function threeNum(num1, num2, num3) {
    if (num1 + num2 > num2 * num3) {
        return true;
    } else {
        return false;
    }
}

console.log(3 + 4 > 4 * 6); // false

// Create a function that takes two numbers and a string aand checks if the sum of two numbers is greater than the multipication second number of the characters of the string. 10, 5, "sister"
// 10+5=15 > 5*6=30
function twoNumbersAndString(num1, num2, str) {
    if (num1 + num2 > num2 * str.length) {
        return true;
    } else {
        return false;
    }
}
console.log(twoNumbersAndString(2, 3, "sister"));

// Create a function that takes tree strings and checks if the concatenation of the first two equal to the third one. "book", "school", "apple", "bookschool" === "apple"

function threeStrings(str1, str2, str3) {
    if (`${str1}${str2}` === str3) {
        return true;
    } else {
        return false;
    }
}

console.log(threeStrings("book", "school", "bookschool")); // true
console.log(threeStrings("book", "school", "book school")); // false

// Create a function that takes the string and a number and checks if the number of string is twice a number.
// "house", 7 5 should be equal to 7*2 5 ===14 // false
