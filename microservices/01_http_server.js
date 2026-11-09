import http from 'node:http' // this is a part of the default node packages
// caution: by default this is an http microservice (not https)

// we often write call-back functions
http.createServer( (req, res)=>{ // req is request, res is response
    const data = `Is it time for coffee?`
    res.write(data)
    res.end() // here is the end of our response object
} )
.listen(8080) // this starts the server, listening on port 8080
