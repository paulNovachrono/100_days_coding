
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is : ${this.username}`);
    }

    static id(){ // if we don't want to let use any property we user "static" keyword
        return `123`
    }
}

const me = new User('Debajoyti')
console.log(me);
// console.log(me.id()); // we can not use id

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher1 = new Teacher('Hitesh', 'h@h.com')
console.log(teacher1);
teacher1.logMe()
// teacher1.id()
// if we use "static" keyword we can not inherit the property

