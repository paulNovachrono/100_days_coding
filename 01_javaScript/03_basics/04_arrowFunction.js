// "this" in JS
// this keyword refers to the current context. If we use "this" in a object, it refers to the object itself.

const person = {
    userName : "Debajoyti",
    age : 23,

    greet: function(){
        //console.log(`${userName}, Welcome to the world of JavaScript!`)// ReferenceError: userName is not defined
        console.log(`${this.userName}, Welcome to the world of JavaScript!`)
        
    }
}
person.greet();

// we can change the value of userName and it will be reflected in the greet function
person.userName = "Ishan"
person.greet(); // Ishan, Welcome to the world of JavaScript!

//console.log(this); // window object, try to run this in browser console

// we can't use "this" in functions
function cantUseThis (){
    const userName = "lama"
    console.log(this.userName) // undefined
    //console.log(this) // window object;
}
// cantUseThis()


// declaring an arrow function
const arrowFunction = () => {
    console.log("This is an arrow function");
}
arrowFunction()

const addTwo = (n1, n2) => {
    return n1 + n2
}

console.log(addTwo(5, 10)); // 15

const implesitreturn = (r1, r2) => console.log(r1 + r2)
implesitreturn(5, 2) // 15

// how implicit returns objects?

const returnObject = () => ({name: "Debajoyti", age: 23}) // we have to wrap the object in parentheses to avoid syntax error
const object = returnObject()
console.log(object); // { name: 'Debajoyti', age: 23 }
