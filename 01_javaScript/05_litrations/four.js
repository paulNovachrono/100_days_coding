const myObj = {
    Name: "Ishan",
    age: 23,
    location: "Kolkata",
    learning: "js"
}
for (const Key in myObj) { // key contains the keys in the object
    // console.log(key);
    let value = myObj[Key] // key contains only the key, value is whatever is in the keys of 
    // myObject
    console.log(`This is the key ${Key} and this is the value ${value}`);
    
}

// loop in array
let prog = ['js', 'py', 'c++', 'rb']
for(let keys in prog){
    console.log(keys);// keys are the index of the array
    console.log(`This is the values ${prog[keys]}`);
    // arrays also have keys that is called indexing and it starts with 0, since we can't manipulate the keys of array, then object come in hand.
}
