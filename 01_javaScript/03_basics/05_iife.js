// IIFE: Immediately Invoke Function Expressions
// syntax:(Function definition)(execution)
// why IIFE: Global scope sometimes polluted functions to prevent this and also execute the function immediately we use IIFE

(function iife(){
    console.log(`This is an IIFE`);
    
})();

// Case -1
// we have to use ";" after calling the IIFE, because IIFE starts invoking function but it don't know where to stop

(function iifeError(){
    console.log(`We need to use ";" after execution of the IIFE`);
    
})(); // semicolon

(function eleseError(){
    console.log(`Other wise we can have some error`);
    
})();

// passing values to IIFE, similar to functions
( (str, num) => {
    console.log(`We can pass parameters: 1st one is String = ${str}, 2nd is ${num}`);
    
})("Debajoyti", 23)

