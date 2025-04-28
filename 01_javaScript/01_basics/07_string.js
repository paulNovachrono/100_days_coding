const name = 'Debajoyti';
let repoCount = 18;

// we can print the both value this way
//console.log('This is ' + name + ' This is my repo count ' + repoCount);


// we can print the both value better way [String interpolation]
console.log(`This is ${name} This is my repo count ${repoCount}`); // this is called template literal
// we can also use template literal to print multi-line string

// There is another way to declear string
const myName = new String('Debajoyti');
console.log(myName); // [String: 'Debajoyti']
// Here is a catch: if we use this way we can use different methods
// like .length, .charAt(), .indexOf() etc.

console.log(myName.toUpperCase()); // DEBAJOYTI

// Here are some methods we can use
console.log(myName.charAt(3)); //a
console.log(myName.indexOf('a')); // 3
console.log(myName.length); // 8

let myString = 'Thank you Hitesh Choudhary sir for this amazing course';
console.log(myString.substring(0, 6)); // it includes 0 to 5, last index is not included
console.log(myString.slice(0, 6)); // it includes 0 to 5, last index is not included

// then you might be thinking what is the difference between substring and slice?
// substring: it doesn't accept negative index
// slice: it accepts negative index

let newString1 = 'Mentor is Hitesh Sir';
let alpha = newString1.slice(-4,-1) // it will return empty string
console.log(alpha);




