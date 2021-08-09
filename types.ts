var http=require('http');
var app=require('./app');
var SERVER_PORT:number;
SERVER_PORT=3000;
var server=http.createServer(app);
server.listen(SERVER_PORT);

