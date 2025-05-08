// get the form 
const form = document.querySelector('form')


// we have to stop submitting default value
form.addEventListener('submit', function(e){
    e.preventDefault() // not submitting default value

    // get the input values
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    // checking
    if(height <0 || isNaN(height)){
        console.log(height);
        return `Not valid ${height}`
    }else if (weight < 0 || isNaN(weight)){
        console.log(weight);
        return `Not valid ${weight}`
    }
    else{
        // calculate the bmi
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2)


        results.innerHTML = `<span>${bmi}</span>`
        console.log(bmi);
        
        if(bmi < 18.6) results.innerHTML = `<span>${bmi}</span> <br>Under weighted`
        else if (bmi < 24.9) results.innerHTML = `<span>${bmi}</span> <br>Weight is Normal`
        else results.innerHTML = `<span>${bmi}</span> <br>Over weighted`
    }
})