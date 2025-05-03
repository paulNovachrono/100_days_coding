// for
for(i = 0; i <= 10; i++){
    // console.log(`This is the value of i: ${i}`)
}

for (j = 0; j <= 10; j++){
    const val = j
    if(val === 7){
        //console.log(`We got the value`);
    }
    //console.log(val);
}

for (i = 0; i <= 5; i++){
    //console.log(`This is the outer value: ${i}`);
    for(j = 0; j <= 5; j++){
        //console.log(`this is the inner value:${j}, and value of outer: ${i}`);
    }
}


// for loop on array
const myArr = ["D", "e", "b", "a", "j", "o", "y", "t", "i"]
for(i = 0; i < myArr.length; i++){
    //console.log(`This is value of i: ${i}`);
    
}

// break and continue
// break
for(i = 0; i < 20; i++){
    if(i === 5){
        console.log(`5 detected`);
        break;
    }
    console.log(i);
    
}

// continue
for(i = 0; i < 20; i++){
    if(i === 5){
        console.log(`5 detected`);
        continue;
    }
    console.log(i); // 5 wont be printed
    
}