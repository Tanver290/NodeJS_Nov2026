import http from 'node:http' // this is a part of the default node packages

const server = http.createServer((req, res) => {
    req.on('error', (err) => {
        console.error(err)
    })

})

server.listen(8080) // this starts the server, listening on port 8080