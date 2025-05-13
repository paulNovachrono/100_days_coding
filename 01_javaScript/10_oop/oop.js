

// object literals
let user = {
    name: "Debajoyti",
    location: "Kolkata",
    learning: "JS",

    getdetails : function(){
        console.log(this.location);
    }
}
//console.log(user.getdetails())

// constructor function
// eg:
// const date = new Date()
// const promiseOne = new Promise()

function objectInstance (userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}

// creating multiple object with a single instance
const objectOne = new objectInstance('Debajoyti', 30, true)
console.log(objectOne);

const objectTwo = new objectInstance('Ishan', 25, false)
console.log(objectTwo);

// constructor function give a new function every time when we use "new" keyword

// when we use "new" keyword, at first an empty object is created, this is called instance
// In third step the variables got inject and in the four step we got the values


// trying new thing
function passVal (name, email, dob){
    // let name = name
    // let email = email
    // let dob = dob
    // we can not pass value like this, we have to use "this" keyword
    this.name = name
    this.email = email
    this.dob = dob

    return this
}

let userVal1 = new passVal("Hitesh", "hitesh@gmail.com", 121212)
console.log(userVal1);
