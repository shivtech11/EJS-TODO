var express = require("express");

app = express();



app.get("/", function (req,res) {
	res.send("Hellow");
});

app.listen(3000,function (req,res) {
	console.log("localhost 3000");
});