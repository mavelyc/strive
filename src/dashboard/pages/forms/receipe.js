

var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// Running Server Details.
var server = app.listen(8085, function () {
                        var host = server.address().address
                        var port = server.address().port
                        console.log("Example app listening at %s:%s Port", host, port)
                        });


app.get('/form', function (req, res) {
        var html='';
        html +="<center><body>";
        html += "<form action='/thank'  method='post' name='form1'>";
        html += "Ingredients In Your Fridge:</p><input type= 'text' name='name' size='100'>";
        html += "<input type='submit' value='submit'>";
        html += "<INPUT type='reset'  value='reset'>";
        html += "</form>";
        html += "</body></center>";
        res.send(html);
        });

var unirest= require('unirest');






app.post('/thank', urlencodedParser, function (req, res){
         
         var ingridients=req.body.name;
 
         
         
         
         var geturl= "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=";
         var end= "&number=5&ranking=1";
         
         var final= geturl + ingridients + end;
 
   
 
 unirest.get(geturl + ingridients + end)
 .header("X-Mashape-Key", "O6HyespcYamshIdsOvlwl5bGoLuRp1seXzCjsniTBx4fMVamlu")
 .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
 .end(function (result) {
      
      

      var length= result.body.length;
      
      for (var i=0; i<length;i++){
      
      console.log(result.body[i].title);
      console.log (result.body[i].image);
      
      }
      
      
      app.set('view engine', 'hbs');
      
     
     
        var html = buildHtml(req);
                               
                               res.writeHead(200, {
                                             'Content-Type': 'text/html',
                                             'Content-Length': html.length,
                                             'Expires': new Date().toUTCString()
                                             });
                               res.end(html);
                               
                               
                               
                               function buildHtml(req) {
                               var header = 'WHAT HEALTHY MEALS ARE AVAILABLE IN YOUR FRIDGE?';
                               
                               var body = "The Dish: "+result.body[0].title+"\n\n";
                               
                               var body2="Link To The Recipe: "+result.body[0].image+"%\n";
                               
                                   
                               var body3 = "The Dish:  "+result.body[1].title+"\n\n";
                                   
                             var body4="Link To The Recipe: "+result.body[1].image+"%\n";
                                   
                                   var body5 = "The Dish:    "+result.body[2].title+"\n\n";
                                   
                                    var body6="Link To The Recipe: "+result.body[2].image+"%\n";
                                   
                                    var body7="The Dish:     "+result.body[3].title+"%\n";
                                   
                                   
                                    var body8="Link To The Recipe: "+result.body[3].image+"%\n";
                                   
                                   
                                   var b= result.body[0].image;
                                   
                                   
                               
                                   
                               

                               
                               
                               
                               
                               // concatenate header string
                               // concatenate body string
                               
                               return '<!DOCTYPE html>'
                               + '<html><centre><header><strong>' + header+'</strong><br /><br /><br </centre><body>' + body+'<br />'+ body2 + '<br /><br />'+ body3 +'<br />'+body4 + '<br /><br />'+body5+'<br />'+ body6 + '<br /><br />'+ body7 +'<br />'+body8+'</centre>';
                               };
   
      
 });
    
});


         
         
   
         
       
        
        




















