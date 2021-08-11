var express = require('express');
// import express from 'express';
var app = express();
var module;
var morgan = require('morgan');
app.use(morgan('dev'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-with,Content-Type,Accept,Authorizaition');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({
    extended: true
}));
app.post('/api/numbers/prime/validate', function (req, res, next) {
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
app.get('/api/numbers/prime', function (req, res) {
    var amount = [];
    var n = Math.floor(Math.random() * 32);
    amount.push(n);
    // while( i<n){
    // amount.push(n[i])
    console.log(amount);
    // }
});
module.exports = app;
