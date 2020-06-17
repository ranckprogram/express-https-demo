// const pem = require('pem');


const http2 = require('http2');
const fs = require('fs');

const options = {
	key: fs.readFileSync('./ca/private.pem'),
	cert: fs.readFileSync('./ca/public.pem')
};

const server = http2.createSecureServer(options);
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
	// stream is a Duplex
	stream.respond({
		'content-type': 'text/html',
		':status': 200
	});
	stream.end('<h1>Hello World</h1>');
});


server.listen(8443);
