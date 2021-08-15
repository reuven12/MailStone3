"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
const express_1 = __importDefault(require("express"));
const app = express_1.default();
var module;
var http = require('http');
var SERVER_PORT;
SERVER_PORT = 3005;
app.listen(SERVER_PORT, () => {
    console.log("running");
});
app.set('view engine', 'pug');
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use(express_1.default.urlencoded({
    extended: true
}));
const { routinit } = require('./routes/config_routs');
routinit(app);
module.exports = app;
//# sourceMappingURL=app.js.map