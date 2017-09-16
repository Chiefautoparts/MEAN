var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	port = 5000,
	app = express();

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/quoteDB');

var quoteSchema = new mongoose.Schema({
	name: String,
	quote: String
});

var Quote = mongoose.model('quotes', quoteSchema);

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('welcome');
});

app.get('/quotes', function(req, res){
	Quote.find({}, function(err, results){
		if(err) { console.log(err); }
		res.render('quotes', { quotes: results});
	});
});

app.post('/quotes', function(req, res){
	Quote.create(req.body, function(err){
		if(err) { console.log(err); }
	});
});

app.listen(port)