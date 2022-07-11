var http = require('http');
var path = require('path');
var express = require('express');

var mainRouter = require('./routes/main');
var userRouter = require('./routes/user');

var port = 9090;

// setup application
var app = express()
        //1. static resources
        .use(express.static(path.join(__dirname, 'assets')))
        //2.1. body parser
        .use(express.urlencoded({extended: true}))
        //2.2 view engine
        .set('views', path.join(__dirname, 'views'))
        .set('view engine', 'ejs')
        //3. request router
        .use('/',mainRouter )
        .use('/user', userRouter);
        

// server start
http.createServer(app).on("listening", function(){
    console.log("http server running on " + port);
}).on("error",function(){
    console.error();
}).listen(port);