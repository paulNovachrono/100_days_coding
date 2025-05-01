
var z = 100
if(true){
    let x = 10;
    const y = 20;
    var z = null;
}
//console.log(x); // ReferenceError: x is not defined
//console.log(y); // ReferenceError: y is not defined
//console.log(z); // null

let globalScope = 100
if(true){
    let blockScope = 200;
    console.log(globalScope); // 100
    console.log(blockScope); // 200

    // reassigning globalScope
    globalScope = 300; // 300
    blockScope = 400; // 400
    return
}
console.log(globalScope); // we can not update globalScope value inside the block and make the change outside the block
//console.log(`Block scope: ${blockScope}`); // We cannot access blockScope outside the block


