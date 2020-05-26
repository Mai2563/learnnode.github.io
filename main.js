//Import require module
var http = require('http')
// var dt = require('./myfirstmodule')
// var url = require('url')
var fs = require('fs')

//Create server
http.createServer(function (request, response){
    fs.readFile('demofile1.html', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(data)
        return response.end()
    })
}).listen(8081)

//console will print the message
console.log('Server running at http://localhost:8081')