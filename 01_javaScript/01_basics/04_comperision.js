// some basics compairision operators
// ==, ===, !=, !==, >, <, >=, <=
// == vs ===
// == checks for value only
// === checks for value and type
// != vs !==
// != checks for value only
// !== checks for value and type

// some confusing cases
console.log("1" == 1); // true
console.log("1" === 1); // false
/*
The first comparison ("1" == 1) is true because == performs type coercion, 
converting the string "1" to the number 1 before comparing their values.


The second comparison ("1" === 1) is false because === checks both value and type without type coercion. 
Since "1" is a string and 1 is a number, they are not strictly equal.
*/

// compairing null and undefined
console.log(null == 0); // false because the equality operator == does not convert null to a number. Instead, null is treated as a special case and only coerces to undefined
console.log(null === 0); // false "===" checks both value and type
console.log(null > 0); // false
console.log(null >= 0);// true {Only for the >= operator, null is treated as 0 in this case.}
console.log(null < 0); // false
console.log(null <= 0); // true
