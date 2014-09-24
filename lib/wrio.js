console.log("Start Web API");
var url = '/api'
var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(1234);

var allowCrossDomain = function (request, response, next) {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

	if ('OPTIONS' == request.method) {
		next();
	}
	else {
		next();
	}
};
/*
app.use(function(req, res, next) {
  next();
})
*/
app.get(url + '/checkme', function (request, response) {
	response.send('Work successfully');
});