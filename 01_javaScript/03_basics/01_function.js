function sayMyName() {
    console.log("Hello, This is Debajoyti");
    
}
sayMyName();

// sending parameters to function
function greet(arguments){
    console.log(`Welcome, ${arguments}`);
    
}
greet("Everyone");

// returning value from function

function addTwoNumbers(num1, num2){
    // console.log(num1 + num2); // this will print the sum but not return it so in the result it will be undefined
    // return num1 + num2;
    return num1 + num2; // this will return the sum of the two numbers
    console.log("this will not be printed"); // this will not be printed because the function has already returned a value
    
}
let sum = addTwoNumbers(5, 10);
console.log(`The sum is: ${sum}`);

function loginUser(name, date) {
    return {
        "userName": `${name}`,
        date: `${date}`,
    }
}
//let user = loginUser("Debajoyti", "30/04/2025");
// console.log(user);
// so what happened if there us no given value to the function

function loginUser2(name, date) {
    // check if both values are given
    if(!name && !date){
        return `Please enter the values`;
        
    }
    return {
        "userName": `${name}`,
        date: `${date}`,
    }
}
let noValue = loginUser2();
console.log(noValue);


// adding default values to the function
const now = new Date();

function loginUser3(name = "User", date = now.getDate()) {
    // check if both values are given
    if(!name && !date){
        return `Please enter the values`;
        
    }
    return {
        "userName": `${name}`,
        date: `${date}`,
    }
}
let defaultValue = loginUser3();
console.log(defaultValue);