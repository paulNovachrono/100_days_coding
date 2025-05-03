// if
// if(conditionTrue){ //in the condition the we have to do compairasion, eg: a == 2
//     console.log(`If the condition is true, the code will be executed inside the scope`)
// }

const temp = 70
if(temp <= 40){
    console.log("<= 40");
}
else {
    console.log("> 40");
}
console.log(`This line will be execute, cause it's out of scopes`);


// else if
const balence = 100
if(balence <= 50){
    console.log(`the balance is ${balence}`);
    
}else if (balence <= 80 ){
    console.log(`Balance is ${balence}`);
    
}else if (balence <= 100 ){
    console.log(`the balence is ${balence}`);
    
}

// and operation
const userName = true
const card = true

if(userName && card){
    console.log(`Granted`);
}else{
    console.log(`Not applicable`);
    
}

const num = 20
const val = true
if(num || val){
    console.log(`If any one is true this code will exexuted`);
    
}