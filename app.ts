var express=require('express');
var app=express();
var module: NodeModule;
var morgan=require('morgan');

app.use(morgan('dev'));

// app.use((req,res,next)=>{
//    res.header('Access-Control-Allow-Origin','*');
//    res.header('Access-Control-Allow-Headers','Origin,X-Requested-with,Content-Type,Accept,Authorizaition');
//  if(req.method==='OPTIONS'){
//    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
//  return res.status(200).json({});
//    }
//    next();
// });

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

    var alphas:number[]; 
    alphas=numarray;

    console.log(alphas);
    
    var i:number; 
    var b:any [];
    for( i = 0; i < alphas.length-1; i++) {
        if(alphas[i] % 2 === 0) {
            // res.send(false) ;  
            console.log(false);
            // return i;  
               
        }      
        // res.send(true) ; 
           console.log(true);
        // return i;  
        b=[1,i]
    } 
    console.log(b);
    
})

module.exports=app;

