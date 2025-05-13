function multby5 (num){
    return num * 5
}

multby5.power = 2
console.log(multby5); // object
console.log(multby5.power) // object value
console.log(multby5(5));
console.log(multby5.prototype);


function createUser(userName, age){
    this.userName = userName
    this.age = age
}

// injecting my functionality to prototype

createUser.prototype.functionNameIsSomething = function(){
    this.age ++
}

createUser.prototype.printAge = function(){
    console.log(`The of the user ${this.userName} age is ${this.age}`);
}

let user1 = new createUser("Ishan", 23)
let user2 = new createUser('Debajoyti', 24)

user1.functionNameIsSomething(); // Increment age for user1
user1.printAge(); // Logs: The of the user Ishan age is 24

user2.printAge(); // Logs: The of the user Debajoyti age is 24
user2.functionNameIsSomething();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/