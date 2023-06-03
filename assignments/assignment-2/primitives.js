// Comparison Operators

5 == "5"; // Equal to true
5 === "5"; // Strictly equal to false
5 != "5"; // Not equal to false
5 !== "5"; // Strictly not equal to false (true)
5 > 3; // Greater than true
5 < 3; // Less than false
5 >= 5; // Greater than or equal to true
5 <= 6; // Less than or equal to true

// Logical Operators

true && false; // Logical AND
true || false; // Logical OR
!true; // Logical NOT
(true && false) || true; // Combination of AND and OR
(!false && true) || false; // Combination of NOT, AND and OR

// Combining Logical and Comparison Operators

5 > 3 && 2 == "2"; // true && true ==>true
5 !== "5" && 6 <= 10; // true && true ==>true
3 === "3" || 7 > 10; // false || false ==>false
4 < 2 || 3 !== "3"; // false || true ==>true
!(5 > 3 && 2 == "2"); // false
!(3 === "3" || 7 > 10); // true || false ==>true
(5 > 3 && !(2 === "2")) || 4 !== "4"; // true && false || false ==>true
7 >= "7" || (!(9 < 11) && 2 !== "2"); // true || false && false ==>true

// More Complex Examples

5 > 3 && 2 == "2" && 7 < 10; // true && true && true ==>true
5 !== "5" && 6 <= 10 && 2 === 2; // true && true && true ==>true
3 === "3" || 7 > 10 || 4 !== 4; // false || false || false ==>false
4 < 2 || 3 !== "3" || 5 == "5"; // false || true || true ==>true
!((5 > 3 && 2 == "2") || 9 === "9"); // false && true || false ==>true
!(3 === "3" || (7 > 10 && 5 !== 5)); // false || false && true =>true
(5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8); // true && true || true && true =>true
7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"; // true || true && true || true =>true
