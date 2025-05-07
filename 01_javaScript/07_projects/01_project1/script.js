// By clicking the colored box the color of the body have change
const body = document.body
// get the span
const buttons = document.querySelectorAll('.button')
// add event listener to every button
console.log(buttons); // it's a nodeList
// convert the nodeList to array
const btns = Array.from(buttons)
console.log(btns); // now this is an Array

// get the id of every button
btns.map((b) => {
    console.log(b);
    const color = b.id
    b.addEventListener('click', (e) => {
        // change the body color by button id
        body.style.backgroundColor = color
    })
})