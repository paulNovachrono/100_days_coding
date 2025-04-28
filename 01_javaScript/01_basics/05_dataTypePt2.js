// call by value: Creates a copy of the value in memory
// call by reference: Creates a reference to the value in memory


// Primitive (Call by value)
    // String
    // Number
    // Boolean
    // Undefined
    // Null
    // Symbol
    // BigInt

// Non-Primitive (Call by reference)
    // Object
    // Array
    // Function

// defining symbol
const firstId = Symbol('9875');
const secondId = Symbol('9875');
console.log(firstId === secondId); // false because they are unique

// defining BigInt
const bigInt = BigInt(1234567890123456789012345678901234567890);
console.log(bigInt); // 1234567890123456789012345678901234567890n
const big2 = 1234567890123456789012345678901234567890n;
console.log(big2); // 1234567890123456789012345678901234567890n

// defining array
const heros = ['Ironman', 'Thor', 'Hulk'];

// defining object
const me = {
    name: 'Debajoyti',
    age: 23,
    portfolio: 'debajoytipaul.mtrench.com',
    linkedin: 'https://www.linkedin.com/in/paul-debajoyti/'
}

console.log(me);

// defining function
let myname = function() {
    console.log('Hello, I am Debajoyti');
}
myname(); // calling function