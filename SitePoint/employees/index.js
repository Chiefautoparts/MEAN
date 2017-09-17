var http = require('http');
var employeeService = require('./lib/employees');
var responder = require('./lib/responseGenerator');
var staticFile = responder.staticFile('/public');

http.createServer(function (req, res) {
	var _url;
	req.method = req.method.toUpperCase();
	console.log(req.method + ' ' + req.url);

	if (req.method !== 'GET') {
		res.writeHead(501, {
			'Content-Type': 'text/plain'
		});
		return res.end(req.method + ' is not implemented byt this server.');
	}

	if (_url = /^\/employees$/i.exec(req.url)) {
		employeeService.getEmployees(function (error, data) {
			if (error) {
				return responder.send500(error, res);
			}
			return responder.sendJson(data, res);
		});
		// res.writeHead(200);
		// return res.end('employee list');
	} else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
		employeeService.getEmployee(_url[1], function (error, data) {
			if (error) {
				return responder.send500(error, res);
			} 
			if (!data) {
				return responder.send404(res);
			}
			return responder.sendJson(data, res);
		});
		// res.writeHead(200);
		// return res.end('a single employee');
	} else {
		res.writeHead(200);
		res.end('static file maybe');
	}
}).listen(1337, '127.0.0.1');

console.log('server runnning at http://127.0.0.1:1337/');