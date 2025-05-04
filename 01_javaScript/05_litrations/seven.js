// map
// similar like filter method
const numbers = [1,2,3,4,5,6,7,8,9,10]
const doubled = numbers.map( (num)=> {return num * 2} )
console.log(doubled);

// method chaining
const chaining = numbers
                .map( (nums) => nums * 10)
                .map( (num) => {return num + 30} )
                .filter( (n)=> n > 60)
                console.log(chaining);