var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get("/posts", function(req, res){
    var posts = [
            {title:"Post 1", author: "Susy"},
            {title:"The Incredibles", author: "Mike"},
            {title:"The Sopranos", author: "Tony"},
        ];
    res.render("posts", {posts: posts});
})

app.get("*", function(req, res){
    res.render("unknown");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});