var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
	console.log('client request URL:', request.url);

	if(request.url === '/'){
		fs.readFile('index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/dojo.html'){
		fs.readFile('dojo.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else {
		response.writeHead(404);
		response.end('File not Found!!!');
	}
});

server.listen(6789);

console.log("running on localhost:6789"); 	