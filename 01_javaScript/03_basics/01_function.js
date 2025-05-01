function sayMyName() {
    console.log("Hello, This is Debajoyti");
    
}
//sayMyName();

// sending parameters to function
function greet(arguments){
    console.log(`Welcome, ${arguments}`);
    
}
//greet("Everyone");

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
//console.log(noValue);


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
//console.log(defaultValue);

// trying add array values to the function
function addArr (arr1, arr2){
    // check if both values are given
    if(!arr1 && !arr2){
        return `Please enter the values`;
    }
    return [arr1.concat(arr2)]
}

addedArr = addArr([1, 2, 3], [4, 5, 6]);
//console.log(addedArr);

// passing multiple values to the function as array with rest operator
function calculatePrises (...prises){
    return prises
}
let totalPrises = calculatePrises(100, 200, 300, 400);
//console.log(totalPrises);

// example - 2
function differentCartValues(val1, val2, ...val3){
    return {val1, val2, val3};
}
console.log(differentCartValues(100, 200, 300, 400, 500)); // { val1: 100, val2: 200, val3: [ 300, 400, 500 ] }

// passing object to the function
const objUser = {
    name: "Debajoyti",
    age: 23,
    dob: "16/09/2001",
}

function passingObject(anyObject){
    console.log(`Name is: ${anyObject.name} and dob is : ${anyObject.dob}`);
}
//passingObject(objUser);

// giving default value to the object
const objEg2 = {
    Teacher: "Hitesh Choudhary",
    subject: "JavaScript",
    experience: "15+ years",
}

function learningFrom(info = {
    Teacher: "User",
    subject: undefined,
    experience: "0 years",
    // this will be the default value if the object is not passed
}){
    console.log(`Teacher is: ${info.Teacher} and Leqarning: ${info.subject}`);
    console.log(`Experience: ${info.experience}`);

}
//learningFrom(objEg2);

// Passing another array to the function
const array1 = [1, true, 3, 4, 5];

function return2ndValue(arr){
    // check if arr is an array
    if(!Array.isArray(arr)){
        return `This is not an array`;
    }
    return `The second value is: ${arr[1]}` ;
}
let secondValue = return2ndValue(array1);
console.log(`${secondValue}`);

