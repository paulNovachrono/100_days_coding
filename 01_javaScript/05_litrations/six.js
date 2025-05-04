// filter
// the reason to use filter: forEach does not return any value so we can't perform any operation on returned value. To do so we can use filter
let numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.filter( (num)=> num > 4 ) // we can store the return value in a variable
const returnedNum = numbers.filter( (num)=> num > 4 )
console.log(returnedNum);

// explicitly return
const greatter6 = numbers.filter( function(item){
    return item > 6 //explicitly return
} )
console.log(greatter6);

// Why we should use filter than forEach
// doing the same operation with forEach
const great4 = [] // empty array declare
numbers.forEach( (num)=>{
    if(num > 4){
        great4.push(num) // pushing the values in the empty array
    }
} )
console.log(`this is the array > four ${great4}`);

// exercise on filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// find the book which have publishing date before 2010
const publessten = books.filter( (b)=> b.publish < 2010 )
//console.log(publessten);

// find the book in Science genre
const sciencegen = books.filter( (sc)=> sc.genre === 'Science')
//console.log(sciencegen);

// find the book that has edition after 2001 (forEach)
const ed01 = []
books.forEach( (bk)=>{
    if(bk.edition > 2001){
        ed01.push(bk)
    }
})
console.log(ed01);
