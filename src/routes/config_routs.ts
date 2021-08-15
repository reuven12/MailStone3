
exports.routinit=(app:any)=>{
    const {primes,primelength,isPrime,primebtw,primebl} = require('prime-num')

    app.post('/api/numbers/prime/validate',(req:any,res:any,next:any)=>{
   
        var numArr:string =(req.body);
    
        var numarray : number[]= numArr.split(',').map(function(item:string) {
            return parseInt(item);
        });
    
        var alphas:number[]= numarray;
        console.log(alphas);
        let prime : boolean = true;
    
    
        for (let i : number = 0; i < alphas.length; i++) {
            if (!isPrime(alphas[i])) {
                prime = false;
                break;
            }
        }  
        res.send(prime);

    });

    
        app.get('/api/numbers/prime', (req:any,res:any)=>{
        let prime_list : number[];
        let inputs : number= req.query.amount;
        
        if (inputs <= 32 ){  
            for (let i:number = 0; prime_list.length < inputs; i++ ){
                if (!isPrime(prime_list[i])){
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
    
    app.get('/api/numbers/prime/display',function(req:any,res:any){
        let prime_list : number[]= [1,2,3,5,7,9,11,13,17,19];
        const num1 : number =  prime_list[0];
        const num2 : number =  prime_list[1];
        const num3 : number =  prime_list[2];
        const num4 : number =  prime_list[3];
        const num5 : number =  prime_list[4];
        const num6 : number =  prime_list[5];
        const num7 : number =  prime_list[6];
        const num8 : number =  prime_list[7];
        const num9 : number =  prime_list[8];
        const num10 : number =  prime_list[9];
    
    
        res.render('index',{
            num1,num2,num3,
            num4,num5,num6,num7,
            num8, num9,num10
        });
    })
}