//Import require module
var http = require('http')
var dt = require('./myfirstmodule')
//Create server
http.createServer(function (request, response){
    //Send the HTTP header
    response.writeHead(200, {'Content-Type':'text/html'})
    // response.writeHead(200, {'Content-Type': 'text/plain'})
    //Send the response body
    response.write("The date and time are currently: " + dt.myDateTime())
    // response.end("hello")
    response.end()
}).listen(8081)

//console will print the message
console.log('Server running at http://localhost:8081')