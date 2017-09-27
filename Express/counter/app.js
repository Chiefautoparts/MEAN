'use static';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({secret: 'ssssssshhhhh dont tell no one'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res){
	if (req.session.count >= 0){
		req.session.count += 2;
		} else {
			req.session.count = 0;
		}res.render('index', {count: req.session.count });
	})

app.post('/plusTwo', function(req, res) {
	if (req.body.submit === 'addTwo'){
		req.session.count += 2;
	}
	res.redirect('/');
})
app.post('/reset', function(req, res) {
	if (req.body.sumbit === 'reset'){
		req.session.count = 1;
	}
	res.redirect('/');
})

app.listen(5000, function() {
	console.log('listening on port 5000');
});