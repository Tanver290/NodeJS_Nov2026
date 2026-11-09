// using the file system
import fs from 'node:fs' // using ECMAScript Modules (esm)
// const fs = require('fs') # this uses commonJS (cjs)

const writeContent = (e)=>{
    // we may need to persist somethnig into a (text) file
    // by default this will append to the file (creeate if not exist)
    // remember, all call-backs will be invoked when the method runs
    fs.appendFile('example.txt', `\n${e}`, ()=>{
        console.info(`${e} has been written to file`)
    })
}
// we need to call the function (invoke it)
writeContent('something')
writeContent('more content')
writeContent('results')
writeContent('.....')