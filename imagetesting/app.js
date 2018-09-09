'use strict'; // makes our code cleaner and easier to read

// RUN PACKAGES
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

// SETUP APP
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));



//MULTER CONFIG: to get file photos to temp server storage
const multerConfig = {
    
    //specify diskStorage (another option is memory)
    storage: multer.diskStorage({
        
        //specify destination
        destination: function(req, file, next){
            next(null, './public/photo-storage');
        },
        
        //specify the filename to be unique
        filename: function(req, file, next){
            console.log(file);
            //get the file mimetype ie 'image/jpeg' split and prefer the second value ie'jpeg'
            const ext = file.mimetype.split('/')[1];
            //set the file fieldname to a unique name containing the original name, current datetime and the extension.
            next(null, file.fieldname = 'userupload.jpg');
        }
    }),
    
    // filter out and prevent non-image files.
    fileFilter: function(req, file, next){
        if(!file){
            next();
        }
        
        // only permit image mimetypes
        const image = file.mimetype.startsWith('image/');
        if(image){
            console.log('photo uploaded');
            next(null, true);
        }else{
            console.log("file not supported")
            //TODO:  A better message response to user on failure.
            return next();
        }
    }
};


/* ROUTES
**********/
app.get('/', function(req, res){
    res.render('index.html');
});

app.post('/upload', multer(multerConfig).single('photo'),function(req, res){
    
    // start processing here _________________________________________________________________________
    
    // [START vision_quickstart]
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
    
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
        
    var express = require('express');
    var app = express();
    
    // Performs label detection on the image file
    client
    .labelDetection('./public/photo-storage/userupload.jpg')
    .then(results => {
        const labels = results[0].labelAnnotations;
        
        
        app.get('/', function(req, res){
            labels.forEach(label=>res.status(200).send(label.description));
        })
        
        var server = app.listen(process.env.PORT||'8080', function(){
            console.log('app listening on port %s', server.address().port)
            console.log('press ctrl + c to quit');
            
        }); // listening in on our server to establish a response
        
        // log to console for testing purposes
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));

    })
    .catch(err => {
        console.error('ERROR:', err);
    });
    
    // [END vision_quickstart]
    // END processing here ____________________________________________________________________
}
);

// RUN SERVER
app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
});