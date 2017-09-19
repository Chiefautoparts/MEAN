var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/message', function(err, db){
	if(err){
		console.log("error here");
		console.log(err);
	}
});
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 4 },
	message: { type:String, required: true, minlength: 10},
	_comments: [{ type: Schema.Types.ObjectId, ref: 'comment'}]
}, {timestamps: true });

var commentSchema = new mongoose.Schema({
	_message: { type: Schema.Types.ObjectId, ref: 'message'},
	name: { type: String, required: true, minlength: 5},
	text: { type: String, required: true},
}, {timestamps: true })
mongoose.model('message', messageSchema);
mongoose.model('comment', commentSchema);
var messages = mongoose.model('message', messageSchema);
var comments = mongoose.model('comment', commentSchema);

app.set('views', path.join(__dirname, './views'));
app.set('view enging', 'ejs');

app.get('/', function(req, res){
	messages.find({}, false, true).populate('_comments').exec(function(err, message){
		res.render('index.ejs', {messages: messages});
	});
});

app.post ('/message', function(req, res){
	var newMessage = new messages({name: req.body.name, message: req.body.message});
	newMessage.save(function(err){
		if(err){
			console.log(err);
			res.render('index.ejs', {erros: newMessage.errors});
		} else {
			console.log('success');
			res.redirect('/');
		}
	})
});

app.post('/comment/:id', function(req, res){
	var message_is = req.params.id;
	messages.findOne({_id: message_id}, function(err, message){
		var newComment = new comments({name: req.body.name, text: req.body.comment});
		newComment._message = message._id;
		messages.update({_id: message._id}, {$push: {'_comments': newComment}}, function(err){

		})
		newComment.save(function(err){
			if(err){
				console.log(err);
				res.render('index.ejs', {errors: newComment.errors});
			} else {
				console.log("added Comment")
				res.redirect('/');
			}
		});
	});
});

app.listen(8000, function(){
	console.log("server running at 8000");
});

