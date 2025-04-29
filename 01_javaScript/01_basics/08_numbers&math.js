let score = 100.465
let balance = new Number (500) // explicitly creating a number object

// console.log(score)
// console.log(balance)
// console.log(balance.toString()) // converting number object to string
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // converting number object to string with 2 decimal places

//console.log(score.toPrecision(4)); // converting number object to string with 4 significant digits


const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) // converting number object to string with thousands separator;

// ********Math**********
// console.log(Math); // run the code on the browser console
// console.log(Math.abs(-100)); // absolute value
// console.log(Math.round(100.465)); // round to nearest integer
// console.log(Math.ceil(100.465)); // ceiling value (101)
// console.log(Math.floor(100.9999999)); // floor value (100)
// console.log(Math.min(100, 200, 300)); // minimum value
// console.log(Math.max(100, 200, 300)); // maximum value

console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10) + 1);
console.log(Math.round((Math.random() * 10) + 1)); // now the answers will be rounded to nearest integer

let min = 100;
let max = 200;
// what we want is a random number between 100 and 200 but also minimum 100
console.log((Math.floor(Math.random() * (max - min + 1) + min))) // now the minimum number will be 100





