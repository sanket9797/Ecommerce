var exp = require('express');
var app = exp();

app.listen(9000,function(){
    console.log("Serever Started");
});

app.get('/greet',function(req,res){
   res.send("<h2> Welcome to web app</h2>");
});

app.get('/login',function(req,res){
   if(req.query.uid=="object" && req.query.pwd=="knowit")
      res.send("You are successfully login");
   else
      res.send("login fail");
});

app.get('/login/:id/:pwd',function(req,res){
    if(req.params.id=="object" && req.params.pwd=="knowit")
      res.send("You are successfully login");
   else
      res.send("login fail");
});

app.all('/*',function(req,res){
        res.send("Invalid url");
});