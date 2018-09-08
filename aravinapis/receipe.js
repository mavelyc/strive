

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
      
    var hbs = require('hbs');
      var router = express.Router();
      
      window.onload = function() {
      //Grab the inline template
      var template = document.getElementById('template').innerHTML;
      
      //Compile the template
      var compiled_template = Handlebars.compile(template);
      
      //Render the data into the template
      var rendered = compiled_template({name: "Luke", power: "force"});
      
      //Overwrite the contents of #target with the renderer HTML
      document.getElementById('target').innerHTML = rendered;
      }
      
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
        
        



import React from 'react';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        person: []
        };
    }
    
    UserList(){
        return $.getJSON('https://randomuser.me/api/')
        .then(function(data) {
              return data.results;
              });
    }
    
    render() {
        this.UserList().then(function(res){
                             this.state = {person: res};
                             });
        return (
                <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">
                {this.state.person.map((item, i) =>{
                                       return(
                                              <h1>{item.name.first}</h1>
                                              <span>{item.cell}, {item.email}</span>
                                              )
                                       })}
                <div>
                </div>
                )
    }
}
















