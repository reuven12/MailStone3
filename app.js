"use strict";
exports.__esModule = true;
// var express=require('express');
var express_1 = require("express");
var app = express_1["default"]();
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
app.use(express_1["default"].json());
app.use(express_1["default"].text());
app.use(express_1["default"].urlencoded({
    extended: true
}));
app.get('/api/numbers/prime', function (req, res) {
    res.status(200);
    res.send('HIIII');
});
app.post('/api/numbers/prime/validate', function (req, res) {
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
    res.send(myArray);
});
module.exports = app;
