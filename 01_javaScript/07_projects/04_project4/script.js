// generate a random number
let randomNumber = parseInt((Math.random() * 100) + 1)
console.log(randomNumber);

//  Set up the game state
    // Previous guesses
    let prevNumbers = [];
    // counter
    let counter = 1;
    // flag
    let playGame = true;

// get all elements
const submitBtn = document.querySelector('#subt'); // submit
guessSlot = document.querySelector('.guesses'); // empty span
const remaining = document.querySelector('.lastResult'); // Remaining
const lowOrHi = document.querySelector('.lowOrHi') // lowOrHi
const inputField = document.querySelector(".guessField")// input field
const resultParasDiv = document.querySelector('.resultParas')

if(playGame){
    submitBtn.addEventListener('click', function(e){
        e.preventDefault() // not getting default values

        const userInput = parseInt(document.querySelector('.guessField').value) //Input value

        // check if user input is a number, < 1 or > 100
        if(isNaN(userInput)){
            alert(`This is not a number: ${userInput}`)
        }else if(userInput < 1){
            alert(`Not acceptable smaller than 1: value: ${userInput}`)
        }else if(userInput > 100){
            alert(`Out of range: ${userInput}`)
        }
        else{
            // pass the user value to the next function
            startGame(userInput)
        }
    })
}
function startGame(userInput){
    // populating the array
    prevNumbers.push(userInput) // appending the value to the array
    console.log(prevNumbers);
    
    counter ++; // increasing the value of the counter
    // change the inner html to see the remaining
    remaining.innerHTML = `${11 - counter}`
    // show the array of guesses
    // guessSlot.innerHTML = prevNumbers.join(','); // adding a coma
    guessSlot.innerHTML = `${prevNumbers.join(',')}`; // adding a coma
    // if the counter value == 10, then make the input field pose
    if(counter > 10){
        submitBtn.setAttribute('disabled', "")// setting the ipfield disable
        // ending the game
        endGame(userInput)
    }

    gameStatus(userInput)
}

// game status will check if you guess the right number
function gameStatus(userInput){
    //checking if the guess number got matched
    if(userInput === randomNumber){
        lowOrHi.innerHTML = `<h3>Yehh! you are lucky. The number is ${userInput}</h3>`
    }else if(userInput > randomNumber){
        lowOrHi.innerHTML = `<h3>The value is > the number</h3>`
    }else if(userInput < randomNumber){
        lowOrHi.innerHTML = `<h3>The value is < the number</h3>`
    }
}
function endGame(userInput){
    playGame = false // making the flag false
    // add a button to start over
    let startBtn = document.createElement('button')
    startBtn.innerText = "Start Again"
    // on the button click the game will start again
    // push the button to the boresultParasDivdy
    resultParasDiv.appendChild(startBtn)
    startBtn.addEventListener('click', function(e){
        startOver()
    })
}

function startOver(){
    // making the submitbtn enable
    submitBtn.removeAttribute('disabled');
    counter = 1 // reset counter
    prevNumbers = [] // reset the array
    playGame = true // flag to true
    // generating a new random number
    randomNumber = parseInt((Math.random() * 100) + 1)
}