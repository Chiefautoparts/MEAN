var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	port = 5000;
	
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/geese');

var geeseSchema = new mongoose.Schema({
	name: String,
	rank: String
});

var geese = mongoose.model('geese', geeseSchema);

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	geese.find({}, function(err, results){
		if (err) { console.log(err); }
		res.render('index', {geese: results });
	});
});


app.post('/', function(req, res){
	geese.create(req.body, function(err, result){
		if(err) { console.log(err); }
		res.redirect('/')
	});
});

app.get('/new', function(req, res){
	res.render('newGoose');
});

app.get('/:id', function(req, res){
	geese.find({ _id: req.params.id }, function(err, response) {
		if (err) { console.log(err); }
		res.render('show', { geese: response[0] });
	});
});

app.get('/:id/edit/', function(req, res){
	geese.find({ _id: req.params.id }, function(err, response) {
		if (err) { console.log(err); }
		res.render('edit', { geese: response[0] });
	});
});

app.post('/id', function(req, res){
	geese.update({ _id: req.params.id }, req.body, function(err, results){
		if (err) { console.log(err); }
		res.redirect('/');
	});
});

app.post('/:id/delete', function(req, res){
	geese.remove({ _id: req/params.id }, function(err, result){
		if (err) { console.log(err); }
		res.redirect('/');
	});
});

app.listen(port, function(){
	console.log('Running on ', port);
})