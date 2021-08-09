var express = require('express');
var app = express();
var module;
var morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
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
app.use(express.urlencoded({
    extended: false
}));
app.get('/api/numbers/prime?amount=n', function (req, res) {
    res.status(200).json({
        message: 'Hi'
    });
});
app.post('/api/numbers/prime/validate', function (req, res) {
    res.status(200).json({
        message: req.body
    });
});
module.exports = app;
