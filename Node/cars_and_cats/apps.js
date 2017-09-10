var http = require('http'),
	fs = require('fs');

var server = http.createServer(function(request, response){
	console.log('Client request URL: ', request.url);
	if(request.url === '/'){
		fs.readFile('cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else if(request.url === 'cats.html'){
		fs.readFile('cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	};
})

