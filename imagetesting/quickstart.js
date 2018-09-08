
/**
* Copyright 2017, Google, Inc.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* 
* quick start using the cloud vision api for fuad ali and medhacks teammates
*/

'use strict'; // makes our code cleaner and easier to read


// [START vision_quickstart]
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
client
.labelDetection('./burgers.jpg')
.then(results => {
  const labels = results[0].labelAnnotations;
  
  // use express
  var express = require('express');
  var app = express();
  app.get('/', function(req, res){
    labels.forEach(label=>res.status(200).send(label.description));
  })
  
  var server = app.listen(process.env.PORT||'8080', function(){
    console.log('app listening on port %s', server.address().port)
    console.log('press ctrl + c to quit');
  }); // listening in on our server to establish a response
  
  
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
})
.catch(err => {
  console.error('ERROR:', err);
});





// [END vision_quickstart]