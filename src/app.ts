var path=require('path');
import express from 'express';
const app=express();
var module: NodeModule;
var http=require('http');
var SERVER_PORT:number;
SERVER_PORT=3005;
app.listen(SERVER_PORT, () => {
    console.log("running");
});



app.set('view engine','pug');
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({
    extended:true
}))
const {routinit} =require('./routes/config_routs');

routinit(app)

module.exports=app;




