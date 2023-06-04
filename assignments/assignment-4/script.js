// template literal method

var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

var result = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;

// console.log(result);

// .concat() method

var concat = part1.concat(
    " ",
    part2,
    " ",
    part3,
    " ",
    part4,
    " ",
    part5,
    " ",
    author
);

// console.log(concat);

// + method

var quoteOperator =
    part1 +
    " " +
    part2 +
    " " +
    part3 +
    " " +
    part4 +
    " " +
    part5 +
    " " +
    author;

// console.log(quoteOperator);

// += method

var operator = part1;
operator += " " + part2;
operator += " " + part3;
operator += " " + part4;
operator += " " + part5;
operator += " " + author;

console.log(operator);
