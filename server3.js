var http = require('http')
var fs = require('fs')
http.createServer((req,res) => {
    //Read File
    fs.readFile("demo1.html",'utf-8', function (err, data) {
        console.log(data)
        res.end(data)
    })
}).listen(5000)
console.log("Server started on http://127.0.0.1:5000")