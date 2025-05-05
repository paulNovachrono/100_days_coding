// reduce
// it takes 2 values 1 accumulator and 2nd one is current
// we can initialize accumulator to any value but generally we use 0
// accumulator is an empty variable

const myNum = [1,2,3]
const total = myNum.reduce((acc, curr)=> {
    console.log(`this is acc ${acc}`);
    console.log(`This is current ${curr}`);
    return acc + curr
}, 0)// initialize acc with 0
console.log(total);


const course = [
    {
        course: "js",
        prise: 999
    },
    {
        course: "react",
        prise: 1299
    },
    {
        course: "py",
        prise: 2999
    },
    {
        course: "c++",
        prise: 1999
    },
]

// use reduce method to add all prises
const allPrises = course.reduce( function(acc, cur){
    let courseTotal = acc + cur.prise
    return courseTotal
},0 )
console.log(`This is total prises ${allPrises}`);
