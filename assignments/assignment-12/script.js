// 1

function lengthOfString(string) {
    var result = string.length;
    return result;
}

console.log(lengthOfString("Hello")); // 5

// 2

function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

console.log(concatenateStrings("Hello", "Uzbekistan")); // HelloUzbekistan

// 3

function toUpperCase(str) {
    var result = str.toUpperCase();
    return result;
}

console.log(toUpperCase("usa")); // USA

// 4

function toLowerCase(str) {
    var result = str.toLowerCase();
    return result;
}
console.log(toLowerCase("NEW YORK")); // new york

// 5

function findSubstring(str, sub) {
    var result = str.includes(sub);
    return result;
}

console.log(findSubstring("Hello World", "World")); // true

// 6

function replaceSubstring(str, sub1, sub2) {
    return str.replace(sub1, sub2);
}

console.log(replaceSubstring("Hello New York", "New York", "Uzbekistan")); // Hello Uzbekistan

// 7

function charAtPosition(str, sub) {
    var result = str.charAt(sub);
    return result;
}

console.log(charAtPosition("New York", 5)); // o

// 8

function trimString(str) {
    var result = str.trim(str);
    return result;
}

console.log(trimString("  Assalomu alaykum  ")); // Assalomu alaykum

// 9

function stringStartsWith(str, sub) {
    var result = str.startsWith(sub);
    return result;
}

console.log(stringStartsWith("Hello", "He")); // true

// 10

function stringEndsWith(str, sub) {
    var result = str.endsWith(sub);
    return result;
}

console.log(stringEndsWith("Abc", "d")); // false

// 11

function convertStringToNumber(str) {
    var result = parseInt(str);
    return result;
}

console.log(convertStringToNumber("987654321"));

// 12

function sliceString(str, sub1, sub2) {
    return str.slice(sub1, sub2);
}
console.log(sliceString("Hello World", 0, 5)); // Hello

// 13

function concatenateAndToUpper(str1, str2) {
    var result = str1.concat(str2).toUpperCase();
    return result;
}

console.log(concatenateAndToUpper("salam", "world")); // SALAMWORLD
