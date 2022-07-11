var http = require('http');
var express = require('express');

var port = 9090;
// setup application
var app = express();

// server start
http.createServer(app).on("listening", function(){
    console.log("http server running on " + port);
}).on("error",function(){
    console.error();
}).listen(port);