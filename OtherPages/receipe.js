

var unirest= require('unirest');
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1")
.header("X-Mashape-Key", "O6HyespcYamshIdsOvlwl5bGoLuRp1seXzCjsniTBx4fMVamlu")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
     console.log(result.status, result.headers, result.body);
     });