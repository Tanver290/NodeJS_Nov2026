import http from 'node:http' // this is a part of the default node packages
// caution: by default this is an http microservice (not https)

// we often write call-back functions
http.createServer( (req, res)=>{ // req is request, res is response
    // it is often a good idea to code against potential errors
    req.on( 'error', (err)=>{
        console.error(err) // console has log, info, warn and error
    } )

    const data = `Is it time for coffee?`
    // there are a number of HTTP verbs:
    // GET, POST, PUT, UPDATE, DELETE...
    if (req.method == 'GET') {
        res.write(data)
        res.end(`all done`) // here is the end of our response object
    }   
} )
.listen(8080) // this starts the server, listening on port 8080
