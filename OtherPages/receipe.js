

/*var unirest= require('unirest');

var geturl= "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=";

var ingridients= "apples flour sugar";


var end= "&number=5&ranking=1";


unirest.get(geturl + ingridients + end)
.header("X-Mashape-Key", "O6HyespcYamshIdsOvlwl5bGoLuRp1seXzCjsniTBx4fMVamlu")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
     console.log(result.status, result.headers, result.body);
     });*/

var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// Running Server Details.
var server = app.listen(8084, function () {
                        var host = server.address().address
                        var port = server.address().port
                        console.log("Example app listening at %s:%s Port", host, port)
                        });


app.get('/form', function (req, res) {
        var html='';
        html +="<body>";
        html += "<form action='/thank'  method='post' name='form1'>";
        html += "Ingredients In Your Fridge:</p><input type= 'text' name='name' size='100'>";
        html += "<input type='submit' value='submit'>";
        html += "<INPUT type='reset'  value='reset'>";
        html += "</form>";
        html += "</body>";
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
 console.log(result.body[0].title);
      console.log (result.body[0].image);
 });
         
         /*request.post(options, (error, response, body) => {
                      if (error) {
                      console.log('Error: ', error);
                      return;
                      }
                      let jsonResponse = JSON.parse(body);
                      
                      console.log("The sex of the individual is: "+jsonResponse[0].title+"\n\n");
                      
                      
                      
                      });*/
         
 
         
         });
        
        




















