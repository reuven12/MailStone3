var express=require('express');
var path=require('path');
// import express from 'express';
const app=express();
var module: NodeModule;
var morgan=require('morgan');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.text());
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({
    extended:true
}))

app.post('/api/numbers/prime/validate',(req,res,next)=>{
   
    var numArr:number|string;
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
    
    let prime_list = []
    
    let a = req.query.amount
    
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

app.get('/api/numbers/prime/display',function(req,res){
    let prime_list:object = [1,2,3,5,7,9,11,13,15,17]
    res.render('index',{
        num1:prime_list[0],
        num2:prime_list[1],
        num3:prime_list[2],
        num4:prime_list[3],
        num5:prime_list[4],
        num6:prime_list[5],
        num7:prime_list[6],
        num8:prime_list[7],
        num9:prime_list[8],
        num10:prime_list[9]
    });
})

module.exports=app;




