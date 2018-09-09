<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    
    <html lang="en">
        <head> 
        
        <title> Hello Handlebars</title>



        
        
    
</head> 
<body> 
                
   
  <script type="text/x-handlebars-template"> 
      
      {{#each result}}
       
       <h2> {{title}}
           
            {{image}}
           
           
           </h2>
       
       
       
     {{/each}}
      </script>  
    
   


<script src="receipe.js"></script>
<script src='handlebars-v4.0.12.js'></script>
</body> 
</html>