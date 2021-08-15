"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
const express_1 = __importDefault(require("express"));
const app = express_1.default();
var module;
// var morgan=require('morgan');
var http = require('http');
var SERVER_PORT;
SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
    console.log("running");
});
app.set('view engine', 'pug');
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use(express_1.default.static(path.join(__dirname, "public")));
app.use(express_1.default.urlencoded({
    extended: true
}));
app.post('/api/numbers/prime/validate', (req, res, next) => {
    var numArr;
    numArr = (req.body);
    var numarray = numArr.split(',').map(function (item) {
        return parseInt(item);
    });
    var alphas = [];
    alphas = numarray;
    console.log(alphas);
    var i;
    var myArray = [];
    for (i = 0; i < alphas.length; i++) {
        if (alphas[i] % 2 === 0) {
            myArray.push(false);
        }
        myArray.push(true);
    }
    for (i = 0; i < myArray.length;) {
        if (myArray[i] === true) {
            i++;
        }
        else {
            res.send(false);
        }
    }
    res.send(true);
    next();
});
// app.listen(3000,() => {
//     console.log("runninhd ");
// })
//     app.get('/api/numbers/prime', (req,res)=>{
//     let prime_list : number[];
//     let inputs : number| string = req.query.amount;
//     // console.log(inputs);
//     if (inputs <= 32 ){  
//         for (let i:number = 0; prime_list.length < inputs; i++ ){
//             if (i % 2 === 0){
//             }else{
//                 prime_list.push(i)
//             }
//         } 
//         console.log(prime_list);
//     }else{
//         console.log("its over 32 ");
//     }
//     res.send(prime_list)
// });
app.get('/api/numbers/prime/display', function (req, res) {
    let prime_list = [1, 2, 3, 5, 7, 9, 11, 13, 17, 19];
    const num1 = prime_list[0];
    const num2 = prime_list[1];
    const num3 = prime_list[2];
    const num4 = prime_list[3];
    const num5 = prime_list[4];
    const num6 = prime_list[5];
    const num7 = prime_list[6];
    const num8 = prime_list[7];
    const num9 = prime_list[8];
    const num10 = prime_list[9];
    res.render('index', {
        num1,
        num2,
        num3,
        num4,
        num5,
        num6,
        num7,
        num8,
        num9,
        num10
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map