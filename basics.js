// this is a Node JS File
// everythnig we write is JavaScript (ECMAScript or ES)
//

// declaring variables
var old  = 3 // we can still use this ancient syntax
let modern = 7.5 // best practice
also = 9 // permitted, but not recommended

modern = 99 

// declaring contants
const immute = 88 // the idea is this will not be changed

// declaring functions
function trad(x){
    return x*x
}
// modern alternative (best practice)
const fn = (x)=>{ 
    return x*x 
}

// there are some use-cases where we are oblgd to use the 'function' keyword

// making use of variables, const and functions
console.log( old, modern, also )
console.log( trad(3), fn(4) )

// a common pattern is to make our code run in a loop
const run = (n)=>{
    if (n==0){
        throw new Error('We have reached Zero')
        // return
    }
    console.log(n)
    run(n-1) // the function calls itself
}

run(9) // at this point, the 'run' function will begin to execute
