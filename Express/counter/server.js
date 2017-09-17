var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	if (req.session) {
		req.session++
		res.setHeader('Content-Type', 'text/html')
		res.write('<h1>Counter</h1>')
		res.write('<h3>viewd: ' + req.session + '</h3>')
		res.end()
	}

})

app.listen(8000, function(){
	console.log('listening on port 8000');
})