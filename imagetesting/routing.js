// set routing so we can port over logic to upload and process image into api get method

var express = require('express');
var app = express();
app.set('view engine', 'ejs');


// will be using get requests
app.get('/about', function(req, res){
    res.render('about');
});

