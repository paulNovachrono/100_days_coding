let myHeros = ['Thor', 'Hulk', 'IronMan','spiderMan']

let heroPower = {
    thor: "Hammer",
    Hulk : "Gamma",

    getSpidyPower: function(){
        console.log(`Spidy power : ${this.spiderMan}`)
    }
}

// creating my own method
Object.prototype.ishan = function(){
    console.log(`Ishan is present`);
    
}

// calling in any object
myHeros.ishan()
heroPower.ishan()

// Power hierarchy => Object is in top -> array and others
// If we add a method on object that method should access by every others like array
// but if we only add methods in lower chain it should not be accessed my other

// example
let objectGetMethod = {
    details: `This object will get the method`
}

Object.prototype.addMe = function(){
    console.log(`Ishan is added to upper chain`);
}
objectGetMethod.addMe() // working

// Now we are creating a lower chain value
let arr = [1,2,3,4]
Array.prototype.addIshan = function(){
    console.log(`Ishan is added to lower chain, this should not get access by upper chain value`);
}
arr.addMe()// upper chain, so it will be accessible
arr.addIshan()// working

// objectGetMethod.addIshan() // This will not work

// inheritance
// accessing the property of others

const user = {
    name: "user",
    email: "user@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvaliable:  false
}

const TAsupport = {
    makeAssignment: "JS",
    isFulltime : true,
    
    // linking object to object
    __proto__ : teachingSupport
}

// we can do the same out side of the object
teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport,teacher )


// creating own property
let anotherString = "Debajoyti Paul        "

// our own property
String.prototype.trueLength = function(){
    console.log(`this is the value of this: ${this}`);
    console.log(`The true length is ${this.trim().length}`);
}

anotherString.trueLength() // tada
"ishan   ".trueLength()