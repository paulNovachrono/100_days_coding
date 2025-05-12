async function getData(){
    try {
        let response = await fetch('https://api.github.com/users/paulnovachrono')
        const data = await response.json() // since this also takes time to convert the data, we must use await
        console.log(data);
        
    } catch (error) {
        console.log('error');
    }

}
getData()

// write the function in .then .catch

const promise6 = new Promise(async function(res, rej){
    let response = await (await fetch('https://api.github.com/users/paulnovachrono')).json()
    res(response)
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log(`Finally block runs for promise6`);
})

// The way "Hitesh sir did"

fetch('https://api.github.com/users/paulnovachrono')
.then(function(response){
    return response.json()// since we are returning data from here we will get data on the next chain (".then")
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
