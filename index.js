
const fs= require("fs");
const path= require ("path");
const express= require ("express");
const app= express();
const myShortId= require("short-id");
var bodyParser= require ("body-parser");
const routes= "/api/messages";
const data= path.join (__dirname, "data.json");

app
.disable('x-powered-by')
.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }));



app.route(routes)
    .get(function(req, res){
        res.sendFile(data)
    })

    .post(function(req,res){
        fs.readFile(data, "utf-8", function(err,newData) {
            const dataParsed = JSON.parse(newData);
            const message = req.body;
            console.log(message);
            const id = myShortId.generate();
            message.id = id;
            dataParsed.push(message);
            fs.writeFile(data, JSON.stringify(newData), function (err) {
                if (err)
                    throw err;
                res.status(201).send(id).end();
            });


        })

});
app.get("api")




app.listen(3000)

