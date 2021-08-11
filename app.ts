// var express=require('express');
import express from 'express';
const app=express();
var module: NodeModule;
var morgan=require('morgan');

app.use(morgan('dev'));

app.use((req,res,next)=>{
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Headers','Origin,X-Requested-with,Content-Type,Accept,Authorizaition');
 if(req.method==='OPTIONS'){
   res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
 return res.status(200).json({});
   }
   next();
});

app.use(express.json());
app.use(express.text());

app.use(express.urlencoded({
    extended:true
}))

app.get('/api/numbers/prime', (req,res)=>{
    res.status(200)
    res.send ('HIIII')
    
});
app.post('/api/numbers/prime/validate',(req,res)=>{
   
    var numArr:any;
    numArr=(req.body);

    var numarray = numArr.split(',').map(function(item) {
        return parseInt(item);
    });

    var alphas:any=[];
    alphas = numarray;
    console.log(alphas);
    var i;
    var myArray =[];
    for (i = 0; i < alphas.length; i++) {
        if (alphas[i] % 2 === 0) {
            myArray.push(false);
        }
            myArray.push(true);
        }
    res.send(myArray)
});

module.exports=app;

