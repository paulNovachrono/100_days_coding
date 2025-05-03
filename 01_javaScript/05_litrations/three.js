// for of
const arr = [1,2,4,5]
for(let val of arr){
    //console.log(`This is the val ${val}`);
    
}

// loop for string
let str = "This is Debajoyti"
for(let char of str){
    // let newCar = Array.from(char)
    // console.log(newCar);
    //console.log(char);
}

// maps
// similar like object but contains only unique value
const myMap = new Map()
myMap.set('Name', 'Debajoyti')
myMap.set('City', "Kolkata")
myMap.set('City', "Kolkata")// it does not contain duplicate value
myMap.set('age', 23)

//console.log(myMap);

const map2 = new Map([
    ['Delhi', 1],
    ['Mumbai', 2],
    ['Kolkata', 3]
])
console.log(map2);
for (const obj of map2) {
    //console.log(map2);
}
// getting keys and values
for(const [i, j] of map2){ // 1st one is key and 2nd one is value
    console.log(`This is key ${i}, this is value ${j}`);
}

// we can't use for of loop in object

// forin comes here
// const myObj = {
//     Name: "Ishan",
//     age: 23,
//     location: "Kolkata",
//     learning: "js"
// }
// for (const val in myObj) {
//     console.log(val);
    
// }

// go to next page
