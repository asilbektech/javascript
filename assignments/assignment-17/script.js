// Write a function findCharFrequency that accepts a string and a character as arguments. This function should iterate through the string using a for loop and count the frequency of the specified character, then return this count.

// Create a function vowelCounter that takes in a string and returns the count of vowels in it.

function vowelCounter(string) {
    var count = 0;
    var vowels = "aeiou";
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count = count + 1;
        }
    }
    return count;
}

console.log(vowelCounter("beautiful"));

// var character = "beautiful";
