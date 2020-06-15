const express = require('express');

const app = express();

var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
	key: fs.readFileSync('./ca/server.key'),
	cert: fs.readFileSync('./ca/server.crt')
};

var httpsServer = https.createServer(options, app);
var httpServer = http.createServer(app);

app.get('/', function(req, res) {
	res.send('hello express https ranck');
});

httpsServer.listen(443);
//http监听3001端口
httpServer.listen(3000);
