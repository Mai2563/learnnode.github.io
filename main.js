//Import require module
var http = require('http')
// var dt = require('./myfirstmodule')
// var url = require('url')
var fs = require('fs')

//Create server
http.createServer(function (request, response){
    //Read file
    fs.readFile('demofile1.html', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(data)
        return response.end()
    })
    //Create file
    fs.appendFile('mynewfile1.txt', 'Hello Content', function (err){
        if (err) throw err;
        console.log('Saved!')
    })

    fs.open('mynewfile2.txt', 'w', function (err, file){
        if (err) throw err
        console.log('Saved!')
    })

    fs.writeFile('mynewfile3.txt', 'Hello', function (err){
        if (err) throw err
        console.log('Saved!')
    })
}).listen(8081)

//console will print the message
console.log('Server running at http://localhost:8081')