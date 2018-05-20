var app   = require('express')();
var cors = require('cors');
var http = require('http').Server(app);
var mysql = require('mysql');
var path    = require("path");
var bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'restaurant',
	});



app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

	



app.post('/type',cors(),function(req,res){
	var type = req.body.type;
	
	connection.query("SELECT Name,Price,VolumeWeight,composition ,Allergens from food where type like ? ",[type],function(err, rows, fields){
	
      
	res.send(rows);
	console.log(rows);
			
		
	});
});


app.post('/drink',cors(),function(req,res){
	var type = req.body.type;
	
	connection.query("SELECT Name,composition,price,volume from drink where type like ? ",[type],function(err, rows, fields){
	
      
	res.send(rows);
	console.log(rows);
			
		
	});
});


app.post('send', (req, res) => {
	console.log(req.body);
} )


http.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});