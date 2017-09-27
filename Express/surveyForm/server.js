'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'classified' }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
})

app.post('/formEntry', function(req, res){
	req.session.name = req.body.name;
	req.session.location = req.body.location;
	req.session.language = req.body.language;
	req.session.comment = req.body.comment;
	res.redirect('/formOutput');
})
app.get('/formOutput', function(req, res) {
	let locals = {
		name: req.session.name,
		location: req.session.location,
		language: req.session.language,
		comment: req.session.comment
	}
	res.render('results', locals);
})


app.get('/return', function(req, res) {
	res.redirect('/');
})
app.listen(8000, function() {
	console.log('listening on port 8000')
})