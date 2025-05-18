class User {
    constructor(userName, email, pass, loginType){
        this.userName = userName,
        this.email = email,
        this.pass = pass,
        this.loginType = loginType
    }

    logMe(){
        console.log(`Welcome ${this.userName}`);
    }
}

// class Teacher extends User{
//     // overriding the constructor
//     constructor(email, pass, loginType, userName){
//         super(userName,null, null,loginType) // super keyword refer the parent class's methods
//         // super(userName) "super keyword can be call once at a time"
//         this.email = email,
//         this.pass = pass,
//     }

//     addCourse(){
//         return `A new course was added by ${this.userName}`
//     }
// }

class Teacher extends User {
    constructor(email, pass, loginType, userName) {
        // Pass placeholders for email and pass, then override below
        super(userName, null, null, loginType);

        // Now explicitly assign your values
        this.email = email;
        this.pass = pass;
    }

    addCourse() {
        return `A new course was added by ${this.userName}`;
    }
}


const user1 = new User("Sachin", 's@s.com', 123, 'teacher')
const user2 = new User('ishan', 'i@i.com', 456, 'student')
const user3 = new User('Hitesh', 'h@h.com', 789, 'teacher')

const teacher1 = new Teacher('s@s.com', 123, 'teacher', 'Sachin')
const teacher2 = new Teacher('h@h.com', 456, 'teacher', 'Hitesh')

console.log(user1);
console.log(user2);
console.log(user3);

console.log(teacher1);
console.log(teacher2);
console.log(teacher1.addCourse());
console.log(teacher2.addCourse());

console.log(user1 instanceof User);
console.log(User instanceof Teacher);
