// array
const myArr = [1,2,3,4, "Debajoyti", true, null,{id: 2001}, undefined, [123, 456]]; // in JavaScript, array can contain any type of data
//console.log(myArr);

// in JS arrays are resizable meaning we can add or remove elements from it

// Some array methods
const numbers = [10, 20, 30, 40, 50];
numbers.push(60); // add element at the end of the array
console.log(numbers); // [10, 20, 30, 40, 50, 60]

numbers.pop(); // remove last element from the array
console.log(numbers); // [10, 20, 30, 40, 50]

numbers.unshift(300); // add element at the beginning of the array
console.log(numbers); // [300, 10, 20, 30, 40, 50]

numbers.shift(); // remove first element from the array
console.log(numbers); // [10, 20, 30, 40, 50]

console.log(numbers.includes(600)); // check if the array contains 600, returns boolean
console.log(numbers.indexOf(20)); // returns the index of 20 in the array, if not found returns -1

const newArr = numbers.join("/")
console.log(newArr);
console.log(typeof newArr); // converts the array to string

// slice vs splice
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`This is the original aray: ${arr}`); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

// slice
const slicedArr = arr.slice(2, 5); // returns a new array from index 2 to 5 (not including 5)
console.log(`This is the sliced array: ${slicedArr}`); // it does not include the last index and also it does not change the original array

// splice
const splicedArr = arr.splice(2, 5); // removes 5 elements from index 2 and returns the removed elements
console.log(`This is the spliced array: ${splicedArr}`); // [7, 6, 5, 4, 3]
console.log(`This is the original array after splice: ${arr}`); // [9, 8, 2, 1] // it changes the original array


