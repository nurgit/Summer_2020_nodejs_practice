//DECELARATION
var express = require('express');
var home = require('./controller/home');
var abc = require('./controller/abc');

var app 	= express();


//Configuration
app.set('view engine', 'ejs');

//Middleware
app.use('/home', home);
app.use('/abc', abc);

//ROUTING
app.get('/', (req, res)=>{

});

app.get('/login', (req, res)=>{

});


//SERVER STARTUP
app.listen(3000, ()=>{
	console.log('express server started at 3000');
});
