var express=require('express');
// import express from 'express';
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

app.post('/api/numbers/prime/validate',(req,res,next)=>{
   
    var numArr:any;
    numArr=(req.body);

    var numarray = numArr.split(',').map(function(item) {
        return parseInt(item);
    });

    var alphas:any=[];
    alphas = numarray;
    console.log(alphas);
    var i:number;
    var myArray =[];
    for (i = 0; i < alphas.length; i++) {
        if (alphas[i] % 2 === 0) {
            myArray.push(false);
        }
            myArray.push(true);
        }
        for(i=0; i<myArray.length;){
            if(myArray[i]===true){
               i++;
            }
            else{
            res.send(false)
            }
        }
        res.send(true)

        next();
});


app.get('/api/numbers/prime', (req,res)=>{
    app.get('/api/numbers/prime', (req,res)=>{
    
    let prime_list = [];
    let a = req.query.amount;
    if (a <= 32 ){  
        for (let i:number = 0; prime_list.length < a; i++ ){
            if (i % 2 === 0){
            }else{
                prime_list.push(i)
            }
        } 
        console.log(prime_list);
    }else{
        console.log("its over 32 ");
    }
    res.send(prime_list)
});

module.exports=app;

