/* App.js file */ 
// RUN PACKAGES
  const express = require('express');  //app router
  const multer = require('multer'); // file storing middleware
  const bodyParser = require('body-parser'); //cleans our req.body
// SETUP APP
  const app = express();   //This IS an express app
  const port = process.env.PORT || 3000;  //preconfig your port!
  app.use(bodyParser.urlencoded({extended:false})); //handle body requests
  app.use(bodyParser.json()); // let's make JSON work too!
  app.use('/', express.static(__dirname + '/public')); 
//let's declare a public static folder, 
// this is where our client side static files/output go