//Import require module
var http = require('http')
//Create server
http.createServer(function (request, response){
    //Send the HTTP header
    response.writeHead(200, {'Content-Type':'text/html'})
    // response.writeHead(200, {'Content-Type': 'text/plain'})
    //Send the response body
    response.end("hello")
}).listen(8081)

//console will print the message
console.log('Server running')