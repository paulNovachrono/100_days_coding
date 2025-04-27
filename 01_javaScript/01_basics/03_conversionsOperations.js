let score = "33";
console.log(typeof(score)); // string

// changing the type of string to number
let numbered = Number(score);
console.log(numbered);
console.log(typeof numbered);
// here it converted properly 
// here is a catch, we will be demonstrate it by an example :-

let newString = "123abc"
console.log(typeof(newString)); // string

// changing the string to number
let newConvertedNum = Number(newString);
console.log(typeof newConvertedNum); // number

// You might think it converted it to the number, but the question should be what is in the variable, so let's see:-
console.log(newConvertedNum); // NaN


/* Here is the short explanation:
{
When converting "123abc" to a number using Number(newString), 
JavaScript attempts to parse the entire string as a valid number. 
Since "123abc" contains non-numeric characters (abc), the conversion fails, 
and Number() returns NaN (Not-a-Number). The type of NaN is still number, 
which is why typeof newConvertedNum outputs "number".
So, the Number() function will convert the string to a number if it is a valid number,
}

*/

let nullValue = null;
let undefinedValue = undefined;
const emptyString = "";
const bool = true;


let nullToNum = Number(nullValue);
let undefinedToNum = Number(undefinedValue);
let emptyStringToNum = Number(emptyString);

console.log(typeof nullToNum); // number
console.log(nullToNum); // 0

console.log(typeof undefinedToNum); // number
console.log(undefinedToNum); // NaN

console.log(typeof emptyStringToNum); // number
console.log(emptyStringToNum); // 0

const newBool = Number(bool);
console.log(typeof newBool); // number
console.log(newBool); // 1
// 0 is false and 1 is true

// to Number
// "1" => 1
// "123mhf" => NaN
// null => 0
// undefined => NaN
// "" => 0
// true => 1
// false => 0

// to String
// 1 => "1"
// 123 => "123"
// NaN => "NaN"
// null => "null"
// undefined => "undefined"
// 0 => "0"
// basically, it will convert the value to string

// to Boolean
// 1 => true
// 0 => false
// NaN => false
// null => false
// undefined => false
// "" => false
// "0" => true
// "1" => true
// "Debajoyti" => true
// "false" => true
// "true" => true
// "123" => true




