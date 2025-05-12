
// Create a new Promise object and assign it to promise1
const promise1 = new Promise(function(resolve, reject) {
    
    // Simulate an asynchronous task using setTimeout (e.g., fetching data)
    setTimeout(function() {
        console.log(`Async task is completed`); // This runs after 2 seconds

        resolve(); // Call resolve() to indicate the task completed successfully
    }, 2000); // Delay of 2 seconds (2000 milliseconds)
});

// Consume the promise using .then()
// This function will run only after resolve() is called
promise1.then(function() {
    console.log(`Promise consumed`); // Logs after the async task is completed
});





new Promise(function(res,rej){
    setTimeout(function(){
        console.log(`Async task 2 done`);
        let message = "Learning Promise"
        res(message)
    },3000)
}).then(function(message){ // passing the same message
    console.log(message);
    console.log(`Promise consumed`);
})


const promiseThree = new Promise(function(res, rej){
    setTimeout(function(){
        // passing an object
        const user1 = {
            userName: "Debajoyti",
            email: "debajoyti.paul@google.com"
        }

        const user2 = {
            userName: "Ishan",
            email: "Ishan.paul@google.com"
        }
        // res(user, user2) // resolve can only have 1 value
        // if we want to have both value, pass the value like a single object
        res({user1, user2})
    },4000)
})

// accessing the object
// promiseThree.then(function(data, user2){
    
//     console.log(data);
//     console.log(user2);
// })

// resolve can have only 1 passing value.


// accessing the both value
promiseThree.then(function(users){
    console.log(users);
    
    console.log(users.user1);
    console.log(users.user2);
    
})



