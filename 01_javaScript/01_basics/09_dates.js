const myDate = new Date();
//console.log(myDate); // Current date and time

console.log(typeof myDate); // Object

// Date methods
console.log(myDate.toString()); // Convert date to string

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString('en-IN',{ timeZone: 'Asia/Kolkata' }));
// console.log(myDate.toUTCString());

const newCreatedDate = new Date(2025, 3, 29, 10, 30, 0); // year, month (0-11), day, hours, minutes, seconds
//console.log(newCreatedDate.toLocaleString());// 4/29/2025, 10:30:00 AM

const newCreatedDate2 = new Date('2025-04-29');
//console.log(newCreatedDate2.toDateString()); // Tue Apr 29 2025

console.log(newCreatedDate.getTime()); // 1714363800000

console.log(Math.round(Date.now()/1000)); // convert to seconds
console.log(Math.round(Date.now()/1000/60)); // convert to minutes
console.log(Math.round(Date.now()/1000/60/60)); // convert to hours


console.log(myDate.getFullYear()); 
console.log(myDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
}));



