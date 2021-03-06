const https = require('https');
const http = require('http');
const fs = require('fs');

const express = require('express');

const app = express();

const options = {
	key: fs.readFileSync('./ca/server.key'),
	cert: fs.readFileSync('./ca/server.crt')
};

const httpsServer = https.createServer(options, app);
const httpServer = http.createServer(app);

app.get('/', function(req, res) {
	res.send('hello express https ranck');
});

httpsServer.listen(443);
httpServer.listen(3000);
