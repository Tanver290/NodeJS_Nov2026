// using the file system
import fs from 'node:fs' // using ECMAScript Modules (esm)
// const fs = require('fs') # this uses commonJS (cjs)
// it is often a good idea to provide a sensible default
const writeContent = (e='default')=>{
    // we may need to persist somethnig into a (text) file
    // by default this will append to the file (creeate if not exist)
    // remember, all call-backs will be invoked when the method runs
    fs.appendFile('example.txt', `\n${e}`, ()=>{
        console.info(`${e} has been written to file`)
    })
}

function readfile(){
    // reading data back (here we specify the encoding as utf8 the default)
    fs.readFile('eample.txt', 'utf8', (err, data)=>{
        if (err){
            console.error(err)
        }
        console.log(data)
    } )
}

// we need to call the functions (invoke them)
writeContent('something')
writeContent('more content')
writeContent('results')
writeContent('.....')
writeContent() // what happens?
readfile()