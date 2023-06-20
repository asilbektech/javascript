// 1. Create a function splitByComma(str) that takes a string str as an argument. This function should split the input string into an array by using a comma as the delimiter.

function splitByComma(str) {
    let array = str.split(",");
    return array;
}

console.log(splitByComma("red,green,blue,yellow")); // [ 'red', 'green', 'blue', 'yellow' ]

// 2. Create a function joinWithDash(arr) that takes an array arr as an argument. The function should join all the elements of the array into a single string with each element separated by a dash "-".

function joinWithDash(arr) {
    let string = arr.join("-");
    return string;
}

console.log(joinWithDash(["quick", "brown", "fox"])); // quick-brown-fox

// 3. Create a function splitSentenceIntoWords(sentence) that takes a sentence as an argument. The function should split the sentence into an array of words. Assume words in the sentence are separated by spaces.

function splitSentenceIntoWords(sentence) {
    let arr = sentence.split(" ");
    return arr;
}

console.log(splitSentenceIntoWords("Hello World from JavaScript")); // [ 'Hello', 'World', 'from', 'JavaScript' ]

// 4. Create a function createCamelCase(str) that takes a string str as an argument. The string contains words separated by spaces. The function should return a camelCase version of the string.

function createCamelCase(str) {
    let words = str.split(" ");
    let camelCase = words[0];
    return words; // not done yet
}

console.log(createCamelCase("first name"));

// 5. Create a function splitAndReverse(str, separator) that takes a string str and a separator as arguments. The function should split the string using the separator, reverse the obtained array and then join it back into a string using the separator.

function splitAndReverse(str, separator) {
    let words = str.split(separator);
    let reverse = words.reverse();

    let string = reverse.join(separator);

    return string;
}

console.log(splitAndReverse("front middle back", " ")); // back middle front

// 6. Create a function replaceSpacesWithUnderscore(str) that takes a string str as an argument. The function should replace all spaces in the string with underscores.

function replaceSpacesWithUnderscore(str) {
    let words = str.split(" ").join("_");

    return words;
}

console.log(replaceSpacesWithUnderscore("Hello world")); // Hello_world

// 7. Create a function splitByMultipleCharacters(str, characters) that takes a string str and an array of characters as arguments. This function should split the string each time one of the characters in the array is encountered.

function splitByMultipleCharacters(str, characters) {
    let words = str.split("e");

    return words;
}

console.log(splitByMultipleCharacters("red,green,blue", [",", "e"])); // [ 'r', 'd,gr', '', 'n,blu', '' ]

// 8. Create a function countWordsInSentence(sentence) that takes a sentence as an argument and returns the number of words in the sentence. Assume words are separated by a single space.

function countWordsInSentence(sentence) {
    let words = sentence.split(" ").length;

    return words;
}

console.log(countWordsInSentence("Hello World from JavaScript")); // 4

// 9. Create a function swapFirstAndLastName(fullName) that takes a string fullName which has first name and last name separated by a space. The function should return a string where the last name comes before the first name, separated by a comma.

function swapFirstAndLastName(fullName) {
    let fullName2 = fullName.split(" ").reverse().join(",");

    return fullName2;
}

console.log(swapFirstAndLastName("John Doe")); // Doe,John

// 10. Create a function createHashtag(str) that takes a string str as an argument and returns a hashtag version of it. Words should be joined with no spaces and every word should start with a capital letter.

// NOT DONE YET

function createHashtag(str) {
    let hashtag = str.split(" ").join("#");
    return hashtag;
}

console.log(createHashtag("hello world"));
