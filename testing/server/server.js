const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404)
	   .send({
	   		error: "Page not found.",
	   		name: "Todo App v1.0"
	   }); 
});

//GET /users
app.get('/users', (req, res) => {
	res.status(200)
	   .send([
	   		{age: 22, name: 'vr'},
	   		{age: 18, name: 'kr'},

	   	]); 
});

app.listen(3000);
module.exports.app = app;