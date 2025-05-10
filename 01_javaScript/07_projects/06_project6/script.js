// get the elements
const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const generateColor = () => {
    let hash = '123456789ABCDEF'
    let color = "#"

    // using a loop insert random value till 6 time on the color variable
    for(i = 0; i < 6 ; i ++){
        const random = Math.ceil(Math.random()* 16)
        color += hash[random]
        console.log(color);
    }
    return color
} // color code generation done

/* we will declare an empty variable, create a function, in the function if we don't have anything in the variable we add the setInterval to change the body color / sec*/

let intervalId;

// create a function that change the body color
const changeBodyColor = () => {
    // if we don't have value in intervalId we add the setInterval to it
    if(!intervalId){
        intervalId = setInterval(function(){
            body.style.backgroundColor = generateColor()
        }, 1000)
    }
}

// when we click the start we call the changeBodyColor
start.addEventListener('click', changeBodyColor)

// end the task
stop.addEventListener('click', function(){
    clearInterval(intervalId) // ending the color changing
    intervalId = null // so we can add value again
})