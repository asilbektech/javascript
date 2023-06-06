//1

var fullName = "John doe";

var spaceIdx = fullName.indexOf(" ");
var firstLetter = fullName[0];
var lastNameFirstLetterIdx = spaceIdx + 1;

var result = (firstLetter + fullName[lastNameFirstLetterIdx]).toUpperCase();
console.log(result);

// 2

var fullName = "Jane smith";

var spaceIdx = fullName.indexOf(" ");
var firstLetter = fullName[0];
var lastNameFirstLetterIdx = spaceIdx + 1;

var initial = firstLetter + fullName[lastNameFirstLetterIdx];
console.log(initial);

// 3

var fullName = "bob Johnson";
var spaceIdx = fullName.indexOf(" ");
var firstNameFirstLetterIdx = fullName[0];
var lastNameFirstLetterIdx = spaceIdx + 1;

var initial =
    firstNameFirstLetterIdx + fullName[lastNameFirstLetterIdx].toLowerCase();
console.log(initial);
