function setUserName (userName){
    this.userName = userName
}

function createUser(userName, email, pass){
    // this.userName = userName
    setUserName.call(this, userName) // explicitly calling the function
    // since the "this" of the "setUserName" is got erased, we are sending our "this" as an optional parameterS
    this.email = email
    this.pass = pass
}

const user = new createUser('ishan', 'ishan@paul.com', 123)
console.log(user);
