// declaring object with constructor
const constructorObj = new Object();
constructorObj.name = 'Debajoyti';
constructorObj.age = 23;
//console.log(constructorObj);

// object nesting
const jsUser = {
    name: 'Debajoyti',
    age: 23,
    address: {
        city: 'Kolkata',
        state: 'West Bengal',
        country: 'India',
    },
    "full address": "Kolkata, West Bengal, India"
}
// console.log(jsUser);

const obj1 = {
    1: 'one',
    2: 'two',
}

const obj2 = {
    3: 'three',
    4: 'four',
}

const obj3 = {
    5: 'five',
    6: 'six',
}

// murging objects
const mergedObj = Object.assign(obj1, obj2, obj3);
//console.log(`This is the OBJ1` + JSON.stringify(obj1));

// stringify: The JSON.stringify() method converts a JavaScript object (obj1) into a JSON string. This is useful for representing objects as strings, such as for logging or transmitting data.
//console.log(mergedObj);

// assign: The Object.assign() method is used to copy the values of all enumerable properties from one or more source objects (obj2 and obj3) to a target object (obj1). 
// In this case, it merges the properties of obj2 and obj3 into obj1.

// better syntax for merging objects
const mergedObj2 = { ...obj1, ...obj2, ...obj3 };
//console.log(mergedObj2);

// to get the keys of an object
const keysjsUser = Object.keys(jsUser); // returns an array of keys
//console.log(keysjsUser);

// to get the values of an object
const valuesjsUser = Object.values(jsUser); // returns an array of values
//console.log(valuesjsUser);

// getting the keys and values of an object as an array of arrays
const entriesjsUser = Object.entries(jsUser); // returns an array of arrays
//console.log(entriesjsUser);

// checking if the object has a specific property
const hasName = jsUser.hasOwnProperty('name'); // returns true if the object has the property
//console.log(hasName);


// destructuring objects
const courseJs = {
    name: 'JavaScript',
    price: 999,
    duration: '3 months',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    instructor: {
        name: 'Hitesh Choudhary',
        experience: '15 years',
    },
}

//const {} = courseJs; // destructuring the object
const { instructor } = courseJs;
console.log(instructor);

const { name } = instructor;
const { name:instructorName } = instructor; // changing the variable name 
console.log(name);
console.log(instructorName);



