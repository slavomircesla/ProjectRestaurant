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

app.post('/send', (req, res) => {
	const output = `
	  <p>You have a new contact request</p>
	  <h3>Contact Details</h3>
	  <ul>  
		<li>Name: ${req.body.name}</li>
		<li>Username: ${req.body.username}</li>
		<li>Email: ${req.body.email}</li>
		<li>Phone: ${req.body.phone}</li>
	  </ul>
	`;
  
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	  host: 'gmail.com',
	  port: 465,
	  secure: true, // true for 465, false for other ports
	  auth: {
		  user: 'slavomir.cesla@akademiasovy.sk', // generated ethereal user
		  pass: 'Kosice2018'  // generated ethereal password
	  },
	  tls:{
		rejectUnauthorized:false
	  }
	});
  
	// setup email data with unicode symbols
	let mailOptions = {
		from: 'slavomir.cesla@akademiasovy.sk', // sender address
		to: 'dominik.cesla@gmail.com', // list of receivers
		subject: 'Reservation', // Subject line
		text: 'Reservation', // plain text body
		html: output // html body
	};
  
	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);   
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
		res.render('contact', {msg:'Email has been sent'});
	});
	});

html.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});