let email = 'd@example.com' // String is truthy value
if (email){
    console.log(`This is the email: ${email}`)
}
else{
    console.log(`No email`)
}

let email2 = `` // empty string is falsy value
if(email2){
    console.log(`This is the email`)
}else{
    console.log(`No email`)
}


// Falsy values
// false, O, -0, null,undefined,BigInt(0n), NaN, ""

// Truthy values
// " ", "0", "false", [], {}, function () {}, 

// checking if an array is empty
const emptyArr = []
if(emptyArr.length === 0){
    console.log(`Array is empty`);
}

// checking if an object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ // Object.keys get all the keys of an object and returns the array of keys, since it returns keys we can use .length property
    console.log(`The object is empty`);
    
}

// Nullish coalescing Operator (??): null undefined
let val1
// val1 = 5 ?? 10
// console.log(val1);

// val1 = null ?? 20
// console.log(val1);

// val1 = undefined ?? 50
// console.log(val1);

val1 = null ?? 10 ?? 30 // get the first value after null
console.log(val1);


// Ternary Operator
// condition ? true : false
const prise = 200
prise > 200 ? console.log(`Peise is greatter ${prise}`) : console.log(`Prise is okey ${prise}`)
