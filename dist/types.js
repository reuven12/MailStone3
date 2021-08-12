var http = require('http');
var app = require('./app');
var SERVER_PORT;
SERVER_PORT = 3000;
var server = http.createServer(app);
server.listen(SERVER_PORT);
//# sourceMappingURL=types.js.map