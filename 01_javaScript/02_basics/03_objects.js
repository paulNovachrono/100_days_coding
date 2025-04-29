// singleton
Object.create({});

// object literal
const jsUser = {
    name: 'Debajoyti',
    age: 23,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Kolkata',
        state: 'West Bengal',
        country: 'India',
        
    },
    "full address": "Kolkata, West Bengal, India"
}

// different ways to access object properties
console.log(jsUser.name); // Debajoyti
console.log(jsUser['name']); // Debajoyti

// we can not access "full address" using dot notation
//console.log(jsUser.address.full address); // SyntaxError: Unexpected identifier

console.log(jsUser["full address"]); // Kolkata, West Bengal, India

// adding symbol to object
// const sym = Symbol('id');
// const obj1 = {
//     [sym]: 2001,
//     name: 'Debajoyti',
//     age: 23,
// }

// console.log(obj1[sym]); // 2001
// console.log(typeof obj1[sym]);

const sym = Symbol('id');
const obj1 = {
    [sym]: Symbol('2001'), // Assigning a Symbol as the value
    name: 'Debajoyti',
    age: 23,
};

console.log(obj1[sym]); // Symbol(2001)
console.log(typeof obj1[sym]); // "symbol"

obj1.email = 'debajoytipaul.com' // adding new property
obj1.name = 'Debajoyti Paul' // updating existing property
obj1.age = 24 // updating existing property
console.log(obj1);

// freeze object
Object.freeze(obj1); // freeze the object
obj1.addNewProp = 'newProp'; // adding new property

console.log(obj1); // change does not reflect


// adding function to object
jsUser.hello = function () {
    console.log('Hello, ' + this.name);
}

console.log(jsUser);
console.log(jsUser.hello);
console.log(jsUser.hello()); // Hello, Debajoyti
