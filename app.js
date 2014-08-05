//var http = require('http'),
//    fs = require('fs');
//
//
//fs.readFile('./public/index.html', function (err, html) {
//    if (err) {
//        throw err; 
//    }       
//    http.createServer(function(request, response) {  
//        response.writeHeader(200, {"Content-Type": "text/html"});  
//        response.write(html);  
//        response.end();  
//    }).listen(8000);
//});


//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use(serveStatic('./public')).listen(80);

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(80);