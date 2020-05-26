//Import require module
var http = require('http')
// var dt = require('./myfirstmodule')
var url = require('url')

//Create server
http.createServer(function (request, response){
    //Send the HTTP header
    response.writeHead(200, {'Content-Type':'text/html'})
        // response.writeHead(200, {'Content-Type': 'text/plain'})
    //Send the response body
        // response.write("The date and time are currently: " + dt.myDateTime())
        // response.end("hello")
    //Get url ex. /summer
        // response.write(request.url)
    //Split the Query String ex. ?year=2017&month=July
    var q = url.parse(request.url, true).query
    var txt = q.year + " " + q.month
    response.end(txt)
}).listen(8081)

//console will print the message
console.log('Server running at http://localhost:8081')