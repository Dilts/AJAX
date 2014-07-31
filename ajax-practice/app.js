var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/numbers', function(req,res){

	// Whatever we pass to res.send gets assigned 
	// to the $.get on the client side
	res.send([
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random()
		])
})

app.post('/add', function(req,res){
	res.send(req.body.data)
	console.log(req.body.data)
})



var server = app.listen(4712, function() {
	console.log('Express server listening on port ' + server.address().port);
});
