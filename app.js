/**
 * Created by Vineet on 04-04-2016.
 */
var express=require('express');

var app  = express();

app.get('/',function(req,res){
    res.sendFile(__dirname+ '/index.html');
});

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req,res){
    console.log('catch the action at www.localhost:' + port);
});