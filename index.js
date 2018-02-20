var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response){
		
		/*if (request.method === 'GET' && request.url === '/index') {
			 fs.readFile('templates/start.html', function(err, html) {
			        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
			        response.write(html);
			        response.end();
			    });*/
			if (request.method === 'GET' && request.url === '/') {
					fs.readFile('./index.html', 'utf-8', function(err, data) {
						if (!err) response.write(data);
						response.end();
					});

		} else {
			response.statusCode = 404;
			response.write('<h1>404: Zła scieżka<h1>');
			response.end();
		}
});
server.listen(9000);

