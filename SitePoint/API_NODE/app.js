var express = require('express');
var http = require('http');
var path = require('path');
var contacts = require('./modules/contacts');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var index = require('./routes/index');
var users = require('./routes/users');
var url = require('url');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/contacts', function(request, response){
		var get_params = url.parse(request.url, true).query;
		if (Object.keys(get_params).length == 0)
		{
			response.setHeader('content-type', 'application/json');
			response.end(JSON.stringify(contacts.list()));
		}
		else 
		{
			response.setHeader('content-type', 'application/json');
			response.end(Json.stringify(contacts.query_by_arg(get_params.arg, get_params.value)));
		}
	}
);

app.get('/contacts/:number', function(request, response) {
	response.setHeader('content-type', 'application/json');
	response.end(JSON.stringify(contacts.query(request.params.number)));
});

app.get('/groups', function(request, response) {
	console.log('groups');
	response.setHeader('content-type', 'application/json');
	response.end(JSON.stringify(contacts.get_members(request.params.name)));
});

app.get('/groups/:name', function(request, response) {
	console.log('groups');
	response.setHeader('content-type', 'application/json');
	response.end(JSON.stringify(contacts.get_members(request.params.name)));
});

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}



app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
