// nested functions
function one(){
    const username = "Ishan";

    function two(){
        const website = "example.com";
        console.log(username);
    }
    // console.log(website);

    let val2 = two()
    //console.log(val2);
    // this is undefuned because two() does not return anything

}
let val1 = one()



if(true){
    const name = "Debajyoti";
    if(name === "Debajyoti"){
        const surname = "Paul";
        console.log(`${name} ${surname}`);
    }
    //console.log(surname); // ReferenceError: surname is not defined
    
}
//console.log(name); // ReferenceError: name is not defined



// Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.


hoistingFunction(); // This is a hoisting function
function hoistingFunction(){
    console.log("This is a hoisting function");
    
}

// if we declared a function inside a variable this is called "function expression"**
const expressionFunction = function(){
    console.log("This is a function expression");
    
}
expressionFunction(); // This is a function expression

// but we can't hoist a function expression because we are try to use the variable before it is declared

//notHoisted() // ReferenceError: notHoisted is not a function
const notHoisted = function(){
    console.log("This is not hoisted");
}