'use stricts';

var path = process.cwd();
var Controller = require(path + '/app/controller/shortenController.js');
var shortenController = new Controller();


module.exports = function(app) {

	app.route('/')
		.get(function(req, res){
			res.sendFile(path + "/public/index.html");
		});

	app.route(/^\/shorten\/(.*)/)
		.get(function(req, res){
			res.json(shortenController.process(req.protocol+"://"+req.headers.host,req.params[0]));
		}); 
	
	app.route('/:shorten')
		.get(function(req, res){
			res.redirect(shortenController.redirect(req.params.shorten));
		}); 		

	// nothing else go back to home
	app.route('/*')
		.get(function(req, res) {
			res.redirect('/');
		});
};