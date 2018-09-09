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
            //set the filename so we can easily retrieve it later 
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


/* ROUTES **********/

app.get('/', function(req, res){
    res.render('./public/index.html');
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
        
        let descriptions = "";
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));
        labels.forEach(label => descriptions += label.description + ",");

        console.log("desc: " + descriptions);
        //for each put intot a string separated by comma

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(descriptions));

        app.get('/', function(req, res){
            res.send(JSON.stringify(descriptions));
        });


        //app.get('/', function(req, res){
        //    labels.forEach(label=>res.status(200).send(label.description));
        //});
        
        // log to console for testing purposes
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
        // END processing here ____________________________________________________________________
}
);

// RUN SERVER
app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
});