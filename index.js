const fs= require("fs");
const path= require ("path");
const express= require ("express");
const app= express();
var bodyParser= require ("body-parser");
app.use(bodyParser.json());
const routes= "/api/messages";
const data= path.join (__dirname, "data.json");

app
.disable('x-powered-by')
.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.route(routes)
.get(function(req, res){
    res.sendFile(data)
}).post(function(req,res){

});
app.get("api/messages/:id",function(req,res){

})

app.listen(3000)

