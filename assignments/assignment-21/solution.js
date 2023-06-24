// part-1

// let length = 5;
// let width = 10;

// let area = length * width;
// console.log(`The area of the rectangle is ${area}`);

// // now change the length and width
// length = 7;
// width = 12;

// area = length * width;
// console.log(`The area of the rectangle is now ${area}`);

// // repeat with const and observe the difference

// const

// const length = 5;
// const width = 10;

// // giving error. It didn't work with const

// const area = length * width;
// console.log(`The area of the rectangle is ${area}`);

// // now change the length and width
// length = 7;
// width = 12;

// area = length * width;
// console.log(`The area of the rectangle is now ${area}`);

// part-2

// console.log(myFunctionDeclaration()); // what does this output? Uncaught ReferenceError: myFunctionDeclaration is not defined

// function myFunctionDeclaration() {
//     return "This is a function declaration!";
// }

// console.log(myFunctionExpression()); // what does this output? undefined (myFunctionExpression is not a function)

// var myFunctionExpression = function () {
//     return "This is a function expression!";
// };

// var myFunctionExpression = function () {
//     return "This is a function expression!";
// };

// part-3

var myVar = "I'm global!";

function someFunction() {
    var myVar = "I'm in function scope!";

    if (true) {
        let myVar = "I'm in block scope!";
        console.log(myVar); // what does this output? // I'm in block scope! (because we called inside the if)
    }

    console.log(myVar); // what does this output? // I'm in function scope! (because we called inside the function!)
}

someFunction();
 
console.log(myVar); // what does this output? // I'm global! (we console.log outside of the function that's why it prints the myVar the one from outside! )
