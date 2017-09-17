var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
	console.log('client request URL:', request.url);

	if (request.url === '/'){
		fs.readFile('index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars.html'){
		fs.readFile('./cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/cats.html'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/cars/new.html'){
		fs.readFile('/cars/new.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === 'images/'){
		fs.readFile('./images', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else {
		response.writeHead(404);
		response.end('File not Found');
	}
})

server.listen(7077);

console.log('Running on localhost:7077');