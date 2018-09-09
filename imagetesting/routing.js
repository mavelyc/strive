// set routing so we can port over logic to upload and process image into api get method

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// app listens on port 3000 for requests
app.listen(3000);

// will be using get requests
app.get('/api', function(req, res){
    
});

