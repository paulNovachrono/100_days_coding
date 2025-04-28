// Stack Memory (Primitive), Heap Memory (Non-Primitive)

// stack
let userMe = "Debajoyti";
let anotherMe = userMe;
// now let's change the value of anotherMe
anotherMe = "Ishan";

console.log(userMe); // Debajoyti
console.log(anotherMe); // Ishan
// What happened here?
// Call by value gives us a copy of the value in memory. Whatever we do with anotherMe, it doesn't affect userMe.


// heap
let userOne = {
    email: "debajoytipaul@example.com",
    id_: 2001
}

let userTwo = userOne;
// since both are getting the same reference in memory, if we change the vale of anyone of them, it will affect the main.

console.log(userTwo.email); // debajoytipaul@example.com

userTwo.email = "ishan@example.com"
console.log(userOne.email); // ishan@example.com

// Here is the figjam link: 
//https://www.figma.com/board/1RxTxUXJ9I8b8Q7TigBDc0/For-JavaScript--Memory-?node-id=0-1&t=bYKOZQnnxuefU8l6-1