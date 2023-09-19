const http = require('http');
const fs = require('fs');
const url =require('url')
const path =url.parse(req.url,true)

http.createServer(function(req,res){
    fs.readFile('./index.html',function(err,data){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        res.end();
    })

}).listen(8080);