const promise4 = new Promise(function(resolve, reject){
    let error = true
    setTimeout(function(){
        if(!error){
        let user = {userName: "paulNovaChrono", age: 23}
        resolve(user)
    }else{
        reject('Error: manually created error')
    }
    }, 2000)
})

promise4
.then(function(user4Name){
    console.log(user4Name);
    return user4Name.age // whatever we return it goes to the chain [next ".then()"]
})
.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(`The error is ${err}`);
    
})
.finally(function(){
    console.log(`The finally block will run doesn't matter if there is error or not`);
    
})


const promise5 = new Promise(function(res, rej){
    let error = false
    if(!error){
        res({me: "ishan"})
    }else{
        rej('Error for promise5')
    }
})

// we will consume the promise by async await
async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromise5()