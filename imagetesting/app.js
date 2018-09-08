
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
            next(null, file.fieldname + '-' + Date.now() + '.'+ext);
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
            
            return next();
        }
    }
};


/* ROUTES
**********/
app.get('/', function(req, res){
    res.render('index.html');
});

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

// RUN SERVER
app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
});