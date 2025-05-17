// ES6


class User {
    constructor(userName, email, password){
        this.userName = userName,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const me = new User('Ishan', 'ishan@gmai.com', 54321)
console.log(me.encryptPassword());


// example-2
class user1{
    constructor(name, age, location, surName){
        this.name = name,
        this.surName = surName,
        this.age = age,
        this.location = location
    }

    fullName(){
        return `${this.name} ${this.surName}`
    }

    student(student){
        return `The student is ${student}`
    }
}

let teacher = new user1('Hitesh', 18, 'Jaipore', 'Choudhury')
console.log(teacher.fullName());
console.log(teacher.student('Debajoyti'));


// Behind the sean (user1)

function User1(name, age, location, surName){
        this.name = name,
        this.surName = surName,
        this.age = age,
        this.location = location
}

User1.prototype.FullName = function(){
    return `${this.name} ${this.surName}`
    }

User1.prototype.Student = function(student){
    return `The student is ${student}`
}

// calling the function
let teacher1 = new User1("Chai", 18, "Kolkata", "aur code")
console.log(teacher1);
console.log(teacher1.FullName());
console.log(teacher1.Student('ishan'));
