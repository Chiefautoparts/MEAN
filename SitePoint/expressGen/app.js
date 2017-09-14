app.use('/api', function (req, res, next) {
	console.log('/api logger');
	console.log(req.method + ' ' + req.url);
	next();
});