var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var shows = ["Friends", "Rick & Morty", "Simpsons", "South Park"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addshow", function(req, res){
    var newShow = req.body.newshows;
    shows.push(newShow);
    res.redirect("/shows");
});

app.get("/shows", function(req, res){
    res.render("shows", {shows: shows});
});

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server is connected")
})