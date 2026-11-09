import http from 'node:http' // this is a part of the default node packages
// caution: by default this is an http microservice (not https)

// we often write call-back functions
const server = http.createServer( (req, res)=>{ // req is request, res is response
    // it is often a good idea to code against potential errors
    req.on( 'error', (err)=>{
        console.error(err) // console has log, info, warn and error
    } )
    // inject a classic response
    res.writeHead(200, {'content-type':'text/html'})
    // there are a number of HTTP verbs:
    // GET, POST, PUT, UPDATE, DELETE...
    if (req.method == 'GET') {
        // decide how to respond
        if (req.url == '/'){
            res.write(`<h3>Welcome</h3>`)
        }
        else if (req.url=='/about'){
            res.write(`<h4>About us...</h4>`)
        }
        // under all circumstances we will 'end'
        res.write() // we may choose to pass a final message (or not)
    }   
} )
// we can refer to our microservice object
const hostName = `127.0.0.1` // this is the same as localhost
const port = 8080
server.listen(port, hostName, ()=>{
    // this call-back will be run when the derver is listening
    // back-tick syntax lets us construct a string of text
    console.info(`Server is running at http://${hostName}:${port}`)
}) // this starts the server, listening on port 8080

// we may run this module like this:
// node nnnn.js
// or we may run as a watching service (re-start on change)
// node --watch nnnn.js

