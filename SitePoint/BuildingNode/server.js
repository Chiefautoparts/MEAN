var express = require('express');
var app = express();

//Route one

app.get('/teams/:teamName/employees/:employeeId', function (req, res, next) {
	console.log('teamName = ' + req.params.teamName);
	console.log('employeeId = ' + req.params.employeeId);
	res.send('path one');
});

// Route two
app.get('/teams/:teamName/employees', function (reg, res, next) {
	console.log('setting content type');
	res.set('setting content type');
	res.locals.data = 100 ;
	next();
}, function (req, res, next) {
	console.log('teamName = ' + req.params.teamName);
	console.log(res.locals)
})