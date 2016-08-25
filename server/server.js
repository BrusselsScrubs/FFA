var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(7777,function(){
    console.log("Listening on port %d",7777);
})
