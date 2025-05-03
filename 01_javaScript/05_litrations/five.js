// forEach
let arr = ['item1', 'item2', 'item3', 'item4']
arr.forEach(function(items){
    console.log(items);
    
})

// doing with arrow function
arr.forEach((i)=> {
    console.log(`The items are ${i}`);
    
})

function printVal (arr){
    console.log(`This is the arr ${arr}`);
    
}
arr.forEach(printVal)


// forEach also can access index, arrays as parameter
arr.forEach( (i, indx, a)=>{ // i = single value, i = index, a = array
    console.log(`this is single item ${i}`);
    console.log(`this is the index ${indx}`);
    console.log(`this is the array${a}`);

} )

// loop on array of objects

let getVal = [
    {
        role: "sd1",
        location: 'Kolkata'
    },
    {
        role: "sd3",
        location: 'Delhi'
    },
    {
        role: "sd1",
        location: 'Pune'
    },
    {
        role: "sd2",
        location: 'Mumbai'
    },
]
getVal.forEach( (obj)=>{
    console.log(`The locations are ${obj.location}`);
    
} )

